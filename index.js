//Modules needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

//An array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Author(s):',
        name: 'authors',
    },
    {
        type: 'input',
        message: 'Link(s) to deployed project:',
        name: 'links',
    },
    {
        type: 'input',
        message: 'Description of purpose and features:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Technologies used:',
        name: 'technologies',
    },
    {
        type: 'input',
        message: 'Installation:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Usage instructions:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution instructions:',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Testing:',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'Contact email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'GitHub repository:',
        name: 'github',
    },
    {
        type: 'list',
        message: 'License:',
        choices: [ 
            'Apache2.0',
            'BSD-3-Clause',
            'GPL-3.0', 
            'LGPL-3.0', 
            'MIT', 
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
    fs.writeFile(`NewReadMe.md`, generateMarkdown(answers), (err) => {
        err ? console.error(err) : console.log("ReadMe created!");
    });
};


// // TODO: Create a function to initialize app
// function init() {}
// // Function call to initialize app
// init();