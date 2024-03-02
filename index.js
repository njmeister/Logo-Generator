const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters',
    },
    {
      type: 'input',
      message: 'Enter a color keyword or hexadecimal code for your text',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Choose a shape',
      name: 'shape',
      choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        message: 'Enter a color keyword or hexadecimal code for your background',
        name: 'shapeColor',
      },
  ])
  .then((data) => {

    const filename = `logo.svg`;

    let shape;
    let chooseShape = (data) => {
        switch (data.shape) {
            case 'circle':
                shape = new shapes.Circle(data.text, data.textColor, data.shapeColor, data.shape);
                break;
            case 'square':
                shape = new shapes.Square(data.text, data.textColor, data.shapeColor, data.shape);
                break;
            case 'triangle':
                shape = new shapes.Triangle(data.text, data.textColor, data.shapeColor, data.shape);
                break;
        }
        return shape.createShapeElement();
    }


    fs.writeFile(filename, chooseShape(data), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
  );
  });
