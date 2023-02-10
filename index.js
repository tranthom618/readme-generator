// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = [
    {   type: "input",
        name: "title", 
        message: "What is the title of your project?" 
    },

    {
        type: "input",
        name: "description", 
        message: "Provide a short description of your project. In other words, what was your motivation? Why did you build this project? What problem does it solve? What did you learn?" 
    },

    {
        type: "input",
        name: "install", 
        message: "Describe the installation instructions or process for a user to setup your application." 
    },

    {
        type: "input",
        name: "usage", 
        message: "Once the application/project is loaded and open, what are the steps for a user to utilize your application?" 
    },

    {
        type: "list",
        name: "licenseSelect", 
        message: "Choose from the following list of the most used standard licenses (Up/Down Arrows Keys to move, Enter to select):" ,
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-clause']
    },

    {
        type: "input",
        name: "contributions", 
        message: "What are some ways that another developer can contribute to this project? Any new features or expanded functionality?" 
    },

    {
        type: "input",
        name: "testing", 
        message: "How can a user run some initial tests on your project to understand your application, and then undo them in preparation for a clean final use?" 
    },
    {
        type: "input",
        name: "github", 
        message: "What is your GitHub username? (Simply the username that follows github.com/[username] without any @ symbols)" 
        //(Link example https://github.com/tranthom618 )
    },

    {
        type: "input",
        name: "email", 
        message: "What is your email address?" 
    },
];

// Function to initialize app
function init() {

    inquirer.prompt(questions)

    .then((answers) => {
        const readmeContent = generateMarkdown(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created readme.md!')
        );
    });
}

// Function call to initialize app
init();