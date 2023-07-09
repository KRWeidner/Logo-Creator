//import required classes and libraries
const { Square, Circle, Triangle } = require("./lib/shapes");
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [{
    type: 'input',
    message: 'Please enter logo text (up to 3 characters): ',
    name: 'text',
    validate: function(text)
        {
            //ensures logo text is not more than 3 characters
            return text.length <= 3;
        }
},
{
    type: 'input',
    message: 'Please enter text color or #hex: ',
    name: 'textColor',
},
{
    type: 'list',
    message: 'Please select a shape?',
    choices: ["Triangle", "Square", "Circle"],
    name: 'shape',
},
{
    type: 'input',
    message: 'Please enter a shape color or #hex: ',
    name: 'shapeColor',
}];

// function to generate markup text and write README file
function writeToFile(fileName, data) {
    switch (data.shape){
        case 'Square':
            var shape = new Square();
            break;
        case 'Triangle': 
            var shape = new Triangle();
            break;
        default:
            var shape = new Circle();
    }
    //set shape color, text, and text color
    shape.setColor(data.shapeColor);
    shape.setText(data.text);
    shape.setTextColor(data.textColor);
    //create svg file text and write to file
    var fileText = generateFileTemplate(shape);
    fs.writeFile(`./examples/${fileName}`, fileText, function (error) { if (error) { throw error } });
}

function generateFileTemplate(shape)
{
    return `<svg xmlns="http://www.w3.org/2000/svg" height="200" width="300">
    ${shape.render()}
    <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-size="3em" style="fill:${shape.textColor}">${shape.logoText}</text>
    </svg> `;
}

//initial function to gather user input with inquirer
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        var fileName = "logo.svg";
        writeToFile(fileName, data);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
            console.log(error);
        };
    });
 }

// Function call to initialize app
init();