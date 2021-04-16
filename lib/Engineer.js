const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.Github = github;
  }
  getGithub() {
    return this.Github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
