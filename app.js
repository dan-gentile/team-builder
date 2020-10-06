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
inquirer
    .prompt([{
            name: "name",
            message: "What is your name?",
            type: "input"
        },
        {
            name: "id",
            message: "What is your ID?",
            type: "input"
        },
        {
            name: "email",
            message: "What is your Email",
            type: "input"
        },
        {
            name: "role",
            message: "What is your job title?",
            choices: ["Manager", "Engineer", "Intern"],
            type: "list"
        }

    ]).then(function(res) {
        const newEmployee = new Employee(res.name, res.id, res.email);
        if (res.role === "Manager") {
            inquirer
                .prompt({
                    name: "officeNumber",
                    message: "What is your Office Number?",
                    type: "input"
                }).then(function(answer) {
                    const manager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, answer.officeNumber);
                    team.push(manager)
                });

        };
        if (res.role === "Engineer") {
            inquirer
                .prompt({
                    name: "gitHubUserName",
                    message: "What is your GitHub username?",
                    type: "input"
                }).then(function(answer) {
                    const engineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, answer.gitHubUserName);
                    team.push(engineer);
                });

        };
        if (res.role === "Intern") {
            inquirer
                .prompt({
                    name: "school",
                    message: "What school do you attend?",
                    type: "input"
                }).then(function(answer) {
                    const intern = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, answer.school);
                    team.push(intern);
                });

        };

    });


// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```