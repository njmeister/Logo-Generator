# UTA Coding Bootcamp Challenge  -- Logo Generator

## Description

This is my submission for the SVG Logo Maker challenge in the UTA/EdX Coding Bootcamp. The goal of this challenge was to create a program that can be run on Node.js and be fully tested using Jest.

<a href="https://drive.google.com/file/d/1OWySGQUpBuZ-AsWRZFPc6YjkITsrlQa6/view?usp=sharing">Link</a>



## Installation

N/A



## Usage

Running the program presents the user with four Inquirer prompts: a 1-3 character text input, a color keyword or hexadecimal code for the text's color, a shape with choices between circle, square, and triangle, and a second color keyword or hexadecimal code for the shape's color. Once all prompts are answered satisfactorily, the program writes an SVG file using that data in a 300x200 icon. If the user enters a string length not between 1 and 3 inclusive for the first prompt, the program will not accept the input and reinquire. Similarly, if the input for the second or fourth prompt is not a recognized keyword or valid 6-digit hexadecimal code, the program will require the user to reenter its response.

## Credits

N/A

## License

This repo uses an MIT License. See above for details.
