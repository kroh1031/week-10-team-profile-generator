const Employee = require("./lib/Employee");

const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const questions = [
  {
    type: "input",
    message: "Please enter the team manager's name",
    name: "managerName",
  },
  {
    type: "input",
    message: "Please enter the team manager's employee ID",
    name: "managerId",
  },
  {
    type: "input",
    message: "Please enter the team manager's email address",
    name: "managerEmail",
  },
  {
    type: "input",
    message: "Please enter the team manager's office number",
    name: "managerOfficeNumber",
  },
  {
    type: "list",
    message: "Which team member would you like to add?",
    name: "member",
    choices: ["Engineer", "Intern"],
  },
];
const init = () => {
  inquirer
    .prompt(questions)
    .then((data) => {
      fs.writeFile("index.html", generateHTML(data), (err) =>
        err ? console.log(err) : console.log("Generating HTML...")
      );
    })
    .catch((err) => console.log(err));
};

init();
