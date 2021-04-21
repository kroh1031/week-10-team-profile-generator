module.exports = {
  chooseType: {
    type: "list",
    message: "Which team member would you like to add?",
    name: "member",
    choices: ["Engineer", "Intern", "Manager", "Done"],
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
  ],
};
