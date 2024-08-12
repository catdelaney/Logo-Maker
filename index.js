const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shapes")
const SVG = require('./lib/svg')

const questions = [
    {
        type: 'input',
        name: 'Text',
        message: 'Enter 3 characters for your Logo',
    },
    {
        type: 'input',
        name: 'TextColor',
        message: 'Enter a color keyword (or a hexadecimal number) for your text',
    },
    {
        type: 'list',
        name: 'Shape',
        message: 'Select a shape for your Logo',
        choices: ['circle','triangle','square'],
    },
    {
        type: 'input',
        name: 'ShapeColor',
        message: 'Enter a color keyword (or a hexadecimal number) for your shape',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error has occured', err);
        } else {
            console.log('Generated logo.svg')
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        let Shape;
        if (answers.Shape === 'circle'){
            Shape = new Circle();
        } else if (answers.Shape === 'triangle'){
            Shape = new Triangle();
        } else if (answers.Shape === 'square'){
            Shape = new Square();
        } 
        Shape.setColor(answers.ShapeColor);
        let svg = new SVG();
        svg.setShapeElement(Shape);
        svg.setTextElement(answers.TextColor,answers.Text);
        console.log(svg.render());
        writeToFile('./examples/logo.svg', svg.render());
    })
    .catch((error) => {
        console.error(error);
    });
}

init();