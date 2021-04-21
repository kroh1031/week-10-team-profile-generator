module.exports = {
  chooseType: {
    type: "list",
    message: "Which type of employee would you like to add?",
    name: "member",
    choices: ["Manager", "Engineer", "Intern", "Done"],
  },

  managerQuestions: [
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
  ],

  engineerQuestions: [
    {
      type: "input",
      message: "Please enter the engineer's name",
      name: "engineerName",
    },
    {
      type: "input",
      message: "Please enter the engineer's employee ID",
      name: "engineerId",
    },
    {
      type: "input",
      message: "Please enter the engineer's email address",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "Please enter the engineer's GitHub username",
      name: "engineerGithub",
    },
  ],
  internQuestions: [
    {
      type: "input",
      message: "Please enter the intern's name",
      name: "internName",
    },
    {
      type: "input",
      message: "Please enter the intern's employee ID",
      name: "internId",
    },
    {
      type: "input",
      message: "Please enter the intern's email address",
      name: "internEmail",
    },
    {
      type: "input",
      message: "Please enter the intern's school",
      name: "internSchool",
    },
  ],
};
