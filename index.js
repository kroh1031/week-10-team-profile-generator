// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

const fs = require("fs");
const {
  chooseType,
  addEmployee,
  managerQuestions,
  engineerQuestions,
  internQuestions,
} = require("./lib/questions");
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
      } else if (data.member === "Intern") {
        askInternQuestions();
      }
    })
    .catch((err) => console.log(err));
};

init();

// Ask if want to add employee
const askAddEmployee = () => {
  inquirer.prompt(addEmployee).then((data) => {
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
  });
};

// Manager Questions
const askManagerQuestions = () => {
  inquirer.prompt(managerQuestions).then((data) => {
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
  });
};

// Engineer Questions
const askEngineerQuestions = () => {
  inquirer.prompt(engineerQuestions).then((data) => {
    employeesArray.push(
      new Engineer(
        data.engineerName,
        data.engineerId,
        data.engineerEmail,
        data.engineerGithub
      )
    );
    askAddEmployee();
    // console.log(employeesArray);
  });
};

// Intern Questions
const askInternQuestions = () => {
  inquirer.prompt(internQuestions).then((data) => {
    employeesArray.push(
      new Intern(
        data.internName,
        data.internId,
        data.internEmail,
        data.internSchool
      )
    );
    askAddEmployee();
    // console.log(employeesArray);
  });
};
