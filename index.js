const renderHTML = require("./src/template");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const teamMembersArray = [];

/* Prompts for manager */

function managerPrompts() {
  inquirer.prompt([
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
  .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      teamMembersArray.push(manager);
      //renderTeam()
  });
}

managerPrompts()