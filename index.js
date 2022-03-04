//Modules needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Who made this project?',
        name: 'authors',
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
        message: 'How can someone contribute to this project?',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'What testing has been done on this project?',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'How would you like to license this project?',
        choices: [ 
            'Apache2.0',
            'BSD-3-Clause',
            'BSD-2-Clause',
            'GPL-3.0', 
            'LGPL-3.0', 
            'MIT', 
            'MPL-2.0',  
            'CDDL-1.0', 
            'EPL-2.0',
        ],
        name: 'license',
    },
];

//Prompts user using the question array
inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeReadme(answers);
    }
);

//Writes the README file
function writeReadme(answers) {
    fs.writeFile(`ReadMe.md`, generateMarkdown(answers), (err) => {
        err ? console.error(err) : console.log("ReadMe created!");
    });
};


// // TODO: Create a function to initialize app
// function init() {}
// // Function call to initialize app
// init();