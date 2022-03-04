// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'How would you describe the purpose and features of this project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the steps required to install this project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'What instructions are there for use of this project?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'What is your contact email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What GitHub profiles are connected to this project?',
        name: 'github',
    },
    {
        type: 'list',
        message: 'How would you like to license this project?',
        choices: [ 
            'GNU AGPLv3', 
            'GNU GPLv3', 
            'GNU LGPLv3', 
            'Mozilla Public License 2.0', 
            'Apache License 2.0', 
            'MIT License', 
            'Boost Software License', 
            'The Unlicense',
        ],
        name: 'license',
    },
    ])
    .then((response) => {
        console.log(response);
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
