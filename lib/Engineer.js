/* Importing employee constructor function */

const Employee = require("./Employee");

/* Construction function that extends Employee constructor for engineer role */

class Engineer extends Employee {
  constructor(name, id, email, gitUsername) {
    super(name, id, email);
    this.gitUsername = gitUsername;
  }
  rendergitUserName() {
    return this.gitUsername;
  }
  renderRole() {
    return "Engineer";
  }
}

/* Exporting Engineer function to other file. */

module.exports = Engineer;
