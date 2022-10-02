const Employee = require(`./Employee`);

class Engineer extends Employee {
  constructor(id, name, email, githubName) {
    super(id, name, email);
    this.githubName = githubName;
  }

  getRole() {
    return "Engineer";
  }

  getGitHub() {
    return this.githubName;
  }
}

module.exports = Engineer;
