const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    "Enter project title.",
    "Enter a project description.",
    "Enter languages used in this project.",
    "Enter installation information.",
    "Enter usage information.",
    "Enter license information.",
    "List contribution information.",
    "List any tests for your project.",
    "Write how to ask questions about the project.",
    "Enter your github username.",
    "Enter your contact email.",
];

// function to write README file
function writeToFile(fileName, answers) {
    fs.writeFile(fileName, generateMarkdown(answers), function(err) {
        if (err) {
            throw (err);  
        }
        else console.log("File successfully written.");
    })

};

// function to initialize program
function init() {
    inquirer
        .prompt([
        {
        type: "input",
        message: `${questions[0]}`,
        name: "title"
        },
        {
        type: "input",
        message: `${questions[1]}`,
        name: "description"
        },
        {
        type: "input",
        message: `${questions[2]}`,
        name: "language"
        },
        {
        type: "input",
        message: `${questions[3]}`,
        name: "installation"
        },
        {
        type: "input",
        message: `${questions[4]}`,
        name: "usage"
        },
        {
        type: "input",
        message: `${questions[5]}`,
        name: "license",
        },
        {
        type: "input",
        message: `${questions[6]}`,
        name: "contributors"
        },
        {
        type: "input",
        message: `${questions[7]}`,
        name: "tests"
        },
        {
        type: "input",
        message: `${questions[8]}`,
        name: "questions"
        },
        {
        type: "input",
        message: `${questions[9]}`,
        name: "username"
        },
        {
        type: "input",
        message: `${questions[10]}`,
        name: "email"
        },

    ]).then((answers) => {
        console.log(answers)
        writeToFile("README.MD", answers);
     })
    
};

// function call to initialize program
init();
