// const Employee = require("./lib/Employee");
// Dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML");
const {
  chooseType,
  addEmployee,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");

// Array with all employee data
let employeesArray = [];

// When app initialized...
const init = () => {
  inquirer
    .prompt(chooseType)
    .then((data) => {
      if (data.member === "Manager") {
        askManagerQuestions();
      } else if (data.member === "Engineer") {
        askEngineerQuestions();
      } else if (data.member === "Intern") {
        askInternQuestions();
      }
    })
    .catch((err) => console.log(err));
};

init();

// Ask if want to add employee
const askAddEmployee = () => {
  inquirer
    .prompt(addEmployee)
    .then((data) => {
      if (data.addEmployee === "Manager") {
        askManagerQuestions();
      } else if (data.addEmployee === "Engineer") {
        askEngineerQuestions();
      } else if (data.addEmployee === "Intern") {
        askInternQuestions();
      } else {
        fs.writeFile("./dist/index.html", generateHTML(employeesArray), (err) =>
          err ? console.log(err) : console.log("Generating HTML...")
        );
      }
    })
    .catch((err) => console.log(err));
};

// Prompt Manager Questions
const askManagerQuestions = () => {
  inquirer
    .prompt(managerQuestions)
    .then((data) => {
      employeesArray.push(
        new Manager(
          data.managerName,
          data.managerId,
          data.managerEmail,
          data.managerOfficeNumber
        )
      );
      askAddEmployee();
      // console.log(employeesArray);
    })
    .catch((err) => console.log(err));
};

// Prompt Engineer Questions
const askEngineerQuestions = () => {
  inquirer
    .prompt(engineerQuestions)
    .then((data) => {
      employeesArray.push(
        new Engineer(
          data.engineerName,
          data.engineerId,
          data.engineerEmail,
          data.engineerGithub
        )
      );
      askAddEmployee();
    })
    .catch((err) => console.log(err));
};

// Prompt Intern Questions
const askInternQuestions = () => {
  inquirer
    .prompt(internQuestions)
    .then((data) => {
      employeesArray.push(
        new Intern(
          data.internName,
          data.internId,
          data.internEmail,
          data.internSchool
        )
      );
      askAddEmployee();
    })
    .catch((err) => console.log(err));
};
