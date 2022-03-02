/* Importing employee constructor function */

const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        
    super(name, id, email);

    this.officeNumber = officeNumber;

    }

    renderOfficeNumber() {
        return this.officeNumber;
    }

    renderRole() {
        return 'Manager';
    }
}

/* Exporting Manager function to other file. */

module.exports = Manager;