const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");


const team = [];

// Write code to use inquirer to gather information about the development team members,

addEmployee();

function addEmployee() {

    inquirer
    // questions to fill out the employee profile
        .prompt([{
            name: "name",
            message: "What is the employee's name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is the employee's ID?",
            type: "input"
        },
        {
            name: "email",
            message: "What is the employee's Email",
            type: "input"
        },
        {
            name: "role",
            message: "What is the employee's title?",
            choices: ["Manager", "Engineer", "Intern"],
            type: "list"
        }

    ]).then(function(res) {
        // create a new employee
        const newEmployee = new Employee(res.name, res.id, res.email);

        switch (res.role) {
            // if they are a manager ask additional questions
            case "Manager":
                inquirer
                    .prompt({
                        name: "officeNumber",
                        message: "What is the employee's Office Number?",
                        type: "input"
                    }).then(function(answer) {
                        const manager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, answer.officeNumber);
                        // add to the team array
                        team.push(manager);
                        // ask if they want to add more employees
                        addMoreEmployees();
                    });
                break;
                // if they are a engineer ask additional questions
            case "Engineer":
                inquirer
                    .prompt({
                        name: "gitHubUserName",
                        message: "What is the employee's GitHub username?",
                        type: "input"
                    }).then(function(answer) {
                        const engineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, answer.gitHubUserName);
                        // add to the team array
                        team.push(engineer);
                        // ask if they want to add more employees
                        addMoreEmployees();
                    });
                break;
                // if they are an intern ask additional questions
            case "Intern":
                inquirer
                    .prompt({
                        name: "school",
                        message: "What school does the intern attend?",
                        type: "input"
                    }).then(function(answer) {
                        const intern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, answer.school);
                        // add to the team array
                        team.push(intern);
                        // ask if they want to add more employees
                        addMoreEmployees();
                    });
                break;
        };
    });
};

// asking the user if they want to add more employees
function addMoreEmployees() {
    inquirer
        .prompt({
            name: "question",
            message: "Do you want to add more employees?",
            choices: ["Yes", "No"],
            type: "list"
        }).then(function(answer) {
            if (answer.question === "no") {
                // if no more employees need to be entered render the results
                const output = render(team);
                // call the function to write the page using the data created above
                writeHTML(output);
            } else {
                // add more employees
                addEmployee();
            };
        });
};


// function to write the HTML file
function writeHTML(a) {
    fs.writeFile(outputPath, a, function(err) {
        if (err) {
            throw err;
        } else {
            console.log("Success!");
        };
    });
};