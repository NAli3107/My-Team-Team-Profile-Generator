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
        answers.officeNumber
      );
      teamMembersArray.push(manager);
      renderTeam();
    });
}

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
      if (answers.teamMembersArray[0] === "Engineer") {
        engineerPrompts();
      } else if (answers.teamMembersArray[0] === "Intern") {
        internPrompts();
      } else {
        return console.log("rendering HTML...");
      }
    });

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
          answers.gitUsername
        );
        teamMembersArray.push(engineer);
        renderTeam();
      });
  }

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
          answers.school
        );
        teamMembersArray.push(intern);
        renderTeam();
      });
  }

  const writeFile = (data) => {
    fs.writeFile("./dist/index.html", data, (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Your team profile has been successfully created!");
      }
    });
  };
}

managerPrompts()
  .then(renderTeam)
  .then((teamMembersArray) => {
    return renderHTML(teamMembersArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
