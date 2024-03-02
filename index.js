const fs = require('fs');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes.js');

const colorKeywords = [
    'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure',
    'beige', 'bisque', 'black', 'blanchedalmond', 'blue',
    'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
    'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson',
    'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray',
    'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen',
    'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen',
    'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet',
    'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue',
    'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro',
    'ghostwhite', 'gold', 'goldenrod', 'gray', 'green',
    'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred',
    'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush',
    'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan',
    'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink',
    'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey',
    'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen',
    'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid',
    'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise',
    'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin',
    'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab',
    'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen',
    'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru',
    'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple',
    'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon',
    'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver',
    'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow',
    'springgreen', 'steelblue', 'tan', 'teal', 'thistle',
    'tomato', 'turquoise', 'violet', 'wheat', 'white',
    'whitesmoke', 'yellow', 'yellowgreen'
];

const hexCode = /^#[a-fA-F0-9]{6}$/

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter up to three characters',
      name: 'text',
      validate: function (text) {
        if (text.length < 4 && text.length > 0) {
          return true;
        } else {
          return 'Please enter between 1 and 3 characters.'
        }
      },

    },
    {
      type: 'input',
      message: 'Enter a color keyword or hexadecimal code for your text',
      name: 'textColor',
      validate: function (textColor) {
        if (colorKeywords.includes(textColor) || hexCode.test(textColor)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or hexadecimal code.'
        }
      }
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
      validate: function (textColor) {
        if (colorKeywords.includes(textColor) || hexCode.test(textColor)) {
          return true;
        } else {
          return 'Please enter a valid color keyword or hexadecimal code.'
        }
      },
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
        return shape.render();
    }


    fs.writeFile(filename, chooseShape(data), (err) =>
    err ? console.log(err) : console.log('Generated logo.svg!')
  );
  });
