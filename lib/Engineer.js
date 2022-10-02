const Employee = require(`./Employee`);

class Engineer extends Employee {
  constructor(id, name, email, githubName) {
    super(id, name, email);
    this.githubName = githubName;
  }
}

module.exports = Engineer;
