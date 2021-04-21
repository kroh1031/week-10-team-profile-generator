// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const fs = require("fs");
const { chooseType, managerQuestions, engineerQuestions } = require("./questions");
const generateHTML = require("./src/generateHTML");

let employeesArray = [];
const init = () => {
  inquirer
    .prompt(chooseType)
    .then((data) => {
      if (data.member === "Manager") {
        askManagerQuestions();
      } else if (data.member === "Engineer") {
        askEngineerQuestions();
      }
      // fs.writeFile("./dist/index.html", generateHTML(data), (err) =>
      //   err ? console.log(err) : console.log("Generating HTML...")
      // );
    })
    .catch((err) => console.log(err));
};

init();

const askManagerQuestions = () => {
  inquirer.prompt(managerQuestions).then((answers) => {
    employeesArray.push(
      new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      )
    );
    console.log(employeesArray);
  });
};

const askEngineerQuestions = () => {
  inquirer.prompt(engineerQuestions).then((answers) => {
    employeesArray.push(
      new Engineer(
        answers.engineerName
        // answers.managerId,
        // answers.managerEmail,
        // answers.managerOfficeNumber
      )
    );
    console.log(employeesArray);
  });
};
