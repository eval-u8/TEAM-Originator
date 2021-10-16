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
const generateWebsite = require('./src/page-template');
const fs = require('fs');
// const generatePage = require('./src/page-template');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var teamArr = [];

const promptManager = () =>{
    inquirer.prompt([
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
    }
    ])
    .then(answers => {
        console.log(answers);
        var manager = new Manager(answers.managerName, answers.employeeId, answers.emailAddress, answers.officeNumber);
        teamArr.push(manager);
        console.log(teamArr);

        managerAction();
    })
};

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter intern's name. (Required)",
                validate: (internsName) => {
                    if (internsName) {
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
                type: "input",
                name: "school",
                message: "Please enter intern's school. (Required)",
                validate: (school) => {
                    if (school) {
                        return true;
                    } else {
                        console.log("Please enter GitHub username to proceed.");
                        return false;
                    }
                },
            },
        ])
        .then((answers) => {
            var intern = new Intern(answers.internName, answers.employeeId, answers.emailAddress, answers.school);
            teamArr.push(intern);

            managerAction();
        });;
}

const addEngineer = () => {
    inquirer.prompt([
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
                    console.log("Please enter e-mail address to proceed.");
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
                    console.log("Please enter GitHub username to proceed.");
                    return false;
                }
            },
        },
    ])
    .then(answers => {
        var engineer = new Engineer(
            answers.engName,
            answers.employeeId,
            answers.emailAddress,
            answers.github);
        teamArr.push(engineer);

        managerAction();
    });
};

const managerAction = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "engOrIntern",
            message: "What would you like to do?",
            choices: ["Add an engineer.", "Add an intern.", "Finish team."],
        },
    ])
    .then(answers => {
        if (answers.engOrIntern === "Add an engineer.") {
            addEngineer();
        } else if (answers.engOrIntern === "Add an intern.") {
            addIntern();            
        } else {
            createTeam();
        }
    });
}

const createTeam = () => {
    console.log('Done');

    var html = generateWebsite(teamArr);
        writeToFile('../Indexhaha.html', html);
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('HTML Complete! please check "Index.html" to see your site');;
    })
}

promptManager();


// new Site().loadSite();