const Employee = require("./lib/Employee.js");

const inquirer = require("inquirer");

const fs = require("fs");

const questions = [];
const init = () => {
  inquirer.prompt(questions);
};

init();
