const inquirer = require("inquirer");
const fs = require("fs");
const generateSVG = require("./lib/shapes")

const questions = [
    {
        type: 'input',
        name: 'Text',
        message: 'Enter 3 characters for your Logo',
    },
    {
        type: 'input',
        name: 'TextColor',
        message: 'Enter a color keyword (or a hexadecimal number)',
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
        message: 'Enter a color keyword (or a hexadecimal number)',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('An error has occured', err);
        } else {
            console.log('SVG file has been generated.')
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const SVG = generateSVG (answers);
        writeToFile('logo.svg', SVG);
    })
    .catch((error) => {
        console.error(error);
    });
}

init();