# Team Builder

![Contents](https://img.shields.io/github/languages/top/dan-gentile/team-builder)
![Last-Commit](https://img.shields.io/github/last-commit/dan-gentile/team-builder)
![License](https://img.shields.io/github/license/dan-gentile/team-builder)

## Description 

![team-builder](https://user-images.githubusercontent.com/68626350/95276503-3492f300-0800-11eb-9da5-1ebc2d2b2aa2.gif))


This application is designed to generate a html webpage for your team based on user inputs. This allows managers to quickly generate a webpage with all of their teams basic info. You will be lead through a series of prompts to populate the page and then a file with all of your data will be created. 

Things that will be generated: 
- Name
- Employee ID #
- Email 
- Job Role (Manager, Engineer, or Intern)
- Phone Number (for Manager)
- GitHub Username (for Engineer)
- School (for Intern)

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Technologies](#technologies)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Code Snippets](#code-snippets)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Technologies 

- [Node.js](https://nodejs.org/en/)
- [Inquirer npm](https://www.npmjs.com/package/inquirer)

## Installation 

Please Navigate to [Node.js](https://nodejs.org/en/) to download and install Node.

Next fork this repository. 

Once you have your forked repo open on your computer. 

Open the `app.js` file in your terminal.

Run the command `npm install`.

You should be ready to go! 

## Usage


Open `app.js` file in the terminal. 

Input `node app.js` to begin. 

Follow prompts to generate your form. 

## Code Snippets

Function asking to add more employees or render the page
~~~
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
~~~


## License 

This license is [MIT](https://github.com/dan-gentile/team-builder/blob/master/LICENSE)

Copyright (c) 2020 Dan Gentile 

## Contributing 


1. Clone repo and create a new branch: 
~~~
$ git checkout -b name_for_new_branch.
~~~
2. Make changes and commit: 
~~~
$ git add . 
$ git commit -m "made changes"
~~~
3. Push to the branch:
~~~
$ git push
~~~
4. Submit Pull Request with comprehensive description of changes

## Test

In the test folder run `npm test`

## Questions 

If you have any questions and would like to get in touch please email me! 
email: dangentile@ymail.com