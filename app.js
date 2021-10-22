const inquirer = require("inquirer");
const manager = require("./team_members/manager");
const intern = require("./team_members/intern");
const engineer = require("./team_members/engineer");
const generateSite = require ("./generate_site")
const fs = require("fs");
const path = require("path");
const { type } = require("os");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const team_members = [];

const groupManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name? (required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "please enter your employee ID (required)",
        validate: (employeeId) => {
          if (employeeId) {
            return true;
          } else {
            console.log("please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "please enter your email (required)",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office number",
        message: "please enter your office number (required)",
        validate: (officeNumber) => {
          if (officeNumber) {
            return true;
          } else {
            console.log("please enter your office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new manager(
        answers.name,
        answers.employeeId,
        answers.officeNumber,
        answers.email
      );
      team_members.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "please select which option you would like to continue with",
        choices:
          ("add an engineer", "add an intern", "finish building my team"),
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name for the engineer?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("please enter the name of engineer");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is ypur employee ID? (required)",
        validate: (engineerId) => {
          if (engineerId) {
            return true;
          } else {
            console.log("please enter your employee ID");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
        validate: (engineerName) => {
          if (engineerName) {
            return true;
          } else {
            console.log("please enter your email");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is your Github username (required)",
        validate: (githubUsername) => {
          if (githubUsername) {
            return true;
          } else {
            console.log("please enter your github username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUsername
      );
      team_members.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "what is the name of the intern(required)",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          console.log("please enter the name of the intern");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "employeeId",
      message: "what is your employee ID(required)",
      validate: (employeeId) => {
        if (employeeId) {
          return true;
        } else {
          console.log("please enter your employee ID");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "what is your email(required)",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          console.log("please enter your email");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "school",
      message: "what is your school's name(required)",
      validate: (schoolName) => {
        if (schoolName) {
          return true;
        } else {
          console.log("please enter your school's name");
          return false;
        }
      }
    }
  ]).then(answers => {
    console.log(answers);
    const intern = new intern(answers.name, answers.employeeId, answers.email, answers.schoolName)
    team_members.push(intern);
    promptMenu();
  })
};

const buildTeam = () => {
  console.log(`
  ===============
 Finish Building My Team
  ===============
  `);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, generateSite(team_members), "utf-8");
}

promptManager();