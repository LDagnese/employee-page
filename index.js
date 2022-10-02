const Manager = require(`./lib/Manager`);
const Engineer = require(`./lib/Engineer`);
const Intern = require(`./lib/Intern`);
const inquirer = require(`inquirer`);
const path = require(`path`);
const fs = require(`fs`);
const generateHTML = require(`./src/generate-html`);

const teamMembers = [];

function app() {
  function buildManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the Manager's name?",
          validate: (answer) => {
            if (answer !== ``) {
              return true;
            }
            return `Answer can't be blank`;
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the Manager's Id number?",
          validate: (answer) => {
            const validId = answer.match(/^\d*$/);
            if (validId) {
              return true;
            }
            return `Answer must be a positive integer`;
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the Manager's email address?",
          validate: (answer) => {
            const validEmail = answer.match(
              /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
            );
            if (validEmail) {
              return true;
            }
            return `Please enter a valid email address`;
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the Manager's Office number?",
          validate: (answer) => {
            const validOffice = answer.match(/^\d*$/);
            if (validOffice) {
              return true;
            }
            return `Answer must be a positive integer`;
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerId,
          answers.managerName,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        buildTeam();
      });
  }

  function buildTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamSelect",
          message: "What type of team member wouldy you like to add?",
          choices: ["Engineer", "Intern", "I am done adding team members"],
        },
      ])
      .then((choice) => {
        switch (choice.teamSelect) {
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
          default:
            buildHTML();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the Engineer's name?",
          validate: (answer) => {
            if (answer !== ``) {
              return true;
            }
            return `Answer can't be blank`;
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the Enginner's Id number?",
          validate: (answer) => {
            const validId = answer.match(/^\d*$/);
            if (validId) {
              return true;
            }
            return `Answer must be a positive integer`;
          },
        },
        {
          type: "input",
          name: "engineerEmail",
          message: "What is the Engineer's email address?",
          validate: (answer) => {
            const validEmail = answer.match(
              /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
            );
            if (validEmail) {
              return true;
            }
            return `Please enter a valid email address`;
          },
        },
        {
          type: "input",
          name: "engineerGitHub",
          message: "What is the Engineer's GitHub User ID?",
          validate: (answer) => {
            if (answer !== ``) {
              return true;
            }
            return `Answer can't be blank`;
          },
        },
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerId,
          answers.engineerName,
          answers.engineerEmail,
          answers.engineerGitHub
        );
        teamMembers.push(engineer);
        buildTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the Intern's name?",
          validate: (answer) => {
            if (answer !== ``) {
              return true;
            }
            return `Answer can't be blank`;
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the Intern's Id number?",
          validate: (answer) => {
            const validId = answer.match(/^\d*$/);
            if (validId) {
              return true;
            }
            return `Answer must be a positive integer`;
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the Intern's email address?",
          validate: (answer) => {
            const validEmail = answer.match(
              /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
            );
            if (validEmail) {
              return true;
            }
            return `Please enter a valid email address`;
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What is the Intern's school name?",
          validate: (answer) => {
            if (answer !== ``) {
              return true;
            }
            return `Answer can't be blank`;
          },
        },
      ])
      .then((answers) => {
        const intern = new Intern(answers.internId, answers.internName, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        buildTeam();
      });
  }

  function buildHTML() {
    console.table(teamMembers)
    fs.writeFileSync(path.join(process.cwd(), `//dist//team.html`), generateHTML(teamMembers));
  }

  buildManager();
}

app();
