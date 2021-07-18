const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require('./lib/intern');

const renderPage = require("./assets/page-render");

const team = [];

function getManager() {
    console.log("Build your Team Profile!");
    inquirer
        .prompt([
            {
                type: "input",
                name: "managerName",
                message: "Write a name for the manager:",
                validate: answer => {
                    if (answer === "") {
                        console.log("Write the name of your manager:")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "managerId",
                message: "Write an Id for the manager:",
                validate: answer => {
                    if (answer < 0) {
                        console.log("Write the number of your manager,  must be greater than zero:");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Write an email for the manager:",
                validate: answer => {
                    let theAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (theAnswer) {
                        return true;
                    }
                    console.log("Please, write a valid email");
                    return false;
                }
            },
            {
                type: "number",
                name: "managerOfficeNumber",
                message: "Write your manager's office number:",
                validate: answer => {
                    if (answer < 0) {
                        console.log("Write a valid number");
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber, answers.manager);
            team.push(manager);
            addTeam();
        });
};

function addTeam() {
    inquirer
        .prompt([{
            type: "list",
            name: "memberPosition",
            message: "Do you need to add an extra member?",
            choices: ["Engineer", "Intern", "No, I do not want an extra member"]
        }]).then(chosen => {
            switch (chosen.memberPosition) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "No, I do not want an extra member":
                    buildTeam();
                    break;
            }
        });
};

function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "Write a name for the engineer:",
                validate: answer => {
                    if (answer === "") {
                        console.log("Write the name of your engineer:")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "engineerId",
                message: "Write an Id for the engineer:",
                validate: answer => {
                    if (answer < 0) {
                        console.log("Write the number of your engineer,  must be greater than zero:");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Write an email for the manager:",
                validate: answer => {
                    let theAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (theAnswer) {
                        return true;
                    }
                    console.log("Please, write a valid email");
                    return false;
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Write your enginer's github username:",
                validate: answer => {
                    if (answer === "") {
                        console.log("Enginer's github username:",)
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub, answers.engineer);
            team.push(engineer);
            addTeam();
        })
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "Write a name for the intern:",
                validate: answer => {
                    if (answer === "") {
                        console.log("Write the name of your intern:")
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "number",
                name: "internId",
                message: "Write an Id for the intern:",
                validate: answer => {
                    if (answer < 0) {
                        console.log("Write the number of your intern,  must be greater than zero:");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Write an email for the intern:",
                validate: answer => {
                    let theAnswer = answer.match(/\S+@\S+\.\S+/);
                    if (theAnswer) {
                        return true;
                    }
                    console.log("Please, write a valid email");
                    return false;
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "Enter the intern's school name:",
                validate: answer => {
                    if (answer === "") {
                        console.log("Write a school name for the Intern")
                        return false;
                    }
                    return true;
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool, answers.intern);
            team.push(intern);
            addTeam();
        })
};

function buildTeam() {
    fs.writeFileSync("./dist/index.html", renderPage(team), 'UTF-8');
}

getManager();