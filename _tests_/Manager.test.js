/* Importing Employer constructor function through require method */
const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('should generate manager object with office number', () => {
        const manager = new Manager("Nadira", 11, "nadira.ali@gmailtemplate.com", '12345');

        expect(manager.renderOfficeNumber).toEqual(expect.any(Number));
    });

    test('should generate employee role', () => {
        const manager = new Manager("Nadira", 11, "nadira.ali@gmailtemplate.com", '12345');

        expect(manager.renderRole()).toEqual('Manager');
    });
}); 
