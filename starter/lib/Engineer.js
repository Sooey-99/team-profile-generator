// Code to define and export the Engineer class.  
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  getId() {
    return this.id;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
  getName() {
    return this.name;
  }
}

module.exports = Engineer;

