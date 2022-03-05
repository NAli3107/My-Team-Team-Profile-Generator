const renderHTML = require("./src/template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const teamMembersArray = [];

/* Prompts for manager */

function managerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Please enter the manager's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter manager's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter manager's email.",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager's office number.",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber,
      );
      teamMembersArray.push(manager);
      renderTeam();
    });
};

function renderTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "roles",
        message: "Please choose your employee's role.",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((answers) => {
      if (answers.roles === "Engineer") {
        engineerPrompts();
      } else if (answers.roles === "Intern") {
        internPrompts();
      } else {
        writeFile();
      }
    });
};

/* Prompts for engineer */

function engineerPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Please enter the engineer's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter engineer's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter engineers's email.",
      },
      {
        type: "input",
        name: "gitUsername",
        message: "Please enter engineer's GitHub Username.",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.gitUsername,
      );
      teamMembersArray.push(engineer);
      renderTeam();
    });
}

/* Prompts for intern */

function internPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: " Please enter the intern's name.",
      },
      {
        type: "input",
        name: "id",
        message: "Please enter intern's ID.",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter intern's email.",
      },
      {
        type: "input",
        name: "school",
        message: "Please enter intern's school.",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
      );
      teamMembersArray.push(intern);
      renderTeam();
    });
}

const writeFile = () => {
  fs.writeFileSync("./dist/index.html", renderHTML(teamMembersArray), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been successfully created!");
    }
  });
};

managerPrompts();
