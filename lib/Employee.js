/* Construction function method for employees that takes in 3 properties. */

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  renderName() {
    return this.name;
  }
  renderID() {
    return this.id;
  }
  renderEmail() {
    return this.email;
  }
  renderRole() {
    return "Employee";
  }
}

/* Exporting employee constructor function so that it can be accessed in other files. */

module.exports = Employee;
