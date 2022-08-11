// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    //User Name
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub Username.',
        // check for valid input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a GitHub Username!");
            }
            return true;

        }
    },

    //GitHub Repo

    {
        type: 'input',
        name: 'repository',
        message: 'Enter the name of your repository on GitHub.', 
        // check for valid input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter your GitHub repository name!");
            }
            return true;
        }   
    },

     // Title

    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project.',
        // check for valid input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter the title of your project.");
            }
            return true;
        }
    },

       // Description

    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.',
        // check for valid input
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a description for your project.");
            }
            return true;
        }
    },

    // Installation

    {
        type: 'input',
        name: 'installation',
        message: 'Explain how user would install (if necessary) for Installation Section.',
        // Validation not required if optional
    },

    // Usage

    {
        type: 'input',
        name: 'usage',
        message: 'Enter your project instructions and examples of it in use for Usage Section.',
        // Validation not required if optional
    },

    // License

    {
        type: 'list',
        name: 'license',
        message: 'Choose your license for your project.',

    // LICENSE REPO LIST LINK https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository

        choices: ['apache-2.0', 'MIT', 'No License', 'Skip']
    },

    // Contributions

    {
        type: 'input',
        name: 'contributing',
        message: 'Explain how users can contribute to your project (if necessary).',
        // Validation not required if optional
    },

    // Test for project

    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests for project, and explain how to test (if necessary).',
        // Validation not required if optional

    },
];
inquirer
    .prompt(questions)
    .then(answers => {
        console.log(answers);
    });
    

    {}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
