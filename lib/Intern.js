/* Importing employee constructor function */

const Employee = require('./Employee');

/* Construction function that extends Employee constructor for intern role */

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    renderSchool() {
        return this.school;
    }

    renderRole() {
        return 'Intern';
    }
}

/* Exporting Intern function to other file. */

module.exports = Intern;