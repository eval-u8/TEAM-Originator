// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');
const Manager = require("./lib/Manager");

const promptManager = () =>{
    return inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Please enter manager's name. (Required)",
        validate: (managerName) => {
            if (managerName) {
                return true;
            } else {
                console.log("Please enter name to proceed.");
                return false;
            }
        },
    },
    {
        type: "number",
        name: "employeeId",
        message: "Please enter employee ID. (Required)",
        validate: (employeeId) => {
            if (employeeId) {
                return true;
            } else {
                console.log("Please enter employee ID to proceed.");
                return false;
            }
        },
    },
    {
        type: "input",
        name: "emailAddress",
        message: "Please enter e-mail address. (Required)",
        validate: (emailAddress) => {
            if (emailAddress) {
                return true;
            } else {
                console.log("Please enter e-mail address to proceed.");
                return false;
            }
        },
    },
    {
        type: "number",
        name: "officeNumber",
        message: "Please enter office number (Required)",
        validate: (officeNumber) => {
            if (officeNumber) {
                return true;
            } else {
                console.log("Please enter office number to proceed.");
                return false;
            }
        }
    },
    {
        type: "list",
        name: "engOrIntern",
        message: "What would you like to do?",
        choices: [
            'Add an engineer.',
            'Add an intern.',
            'Finish team.'
        ]
        // validate: (officeNumber) => {
        //     if (officeNumber) {
        //         return true;
        //     } else {
        //         console.log("Please enter office number to proceed.");
        //         return false;
        //     }
    }])
    .then(answers => {
        if (answers.engOrIntern === 'Add an engineer.') {
            return inquirer.prompt([
                {
                    type: "input",
                    name: "engName",
                    message: "Please enter engineer's name. (Required)",
                    validate: (engineerName) => {
                        if (engineerName) {
                            return true;
                        } else {
                            console.log("Please enter name to proceed.");
                            return false;
                        }
                    },
                },
                {
                    type: "number",
                    name: "employeeId",
                    message: "Please enter employee ID. (Required)",
                    validate: (employeeId) => {
                        if (employeeId) {
                            return true;
                        } else {
                            console.log("Please enter employee ID to proceed.");
                            return false;
                        }
                    },
                },
                {
                    type: "input",
                    name: "emailAddress",
                    message: "Please enter e-mail address. (Required)",
                    validate: (emailAddress) => {
                        if (emailAddress) {
                            return true;
                        } else {
                            console.log(
                                "Please enter e-mail address to proceed."
                            );
                            return false;
                        }
                    },
                },
                {
                    type: "input",
                    name: "github",
                    message: "Please enter GitHub username. (Required)",
                    validate: (githubUsername) => {
                        if (githubUsername) {
                            return true;
                        } else {
                            console.log(
                                "Please enter GitHub username to proceed."
                            );
                            return false;
                        }
                    },
                },
            ]);

        } else if (answers.engOrIntern === 'Add an intern.') {

        } else {

        }
    })
};

const managerAction = () => {
    return inquirer.prompt([


    ])
}


promptManager();
// new Site().loadSite();