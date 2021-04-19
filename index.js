const Employee = require("./lib/Employee");

const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const questions = [
  {
    type: "input",
    message: "Please enter the team manager's name",
    name: "team manager name",
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
