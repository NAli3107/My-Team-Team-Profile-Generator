/* Importing Employer constructor function through require method */
const Intern = require('../lib/Intern');

describe('Intern', () => {
    test('should generate employee school', () => {
        const intern = new Intern("Nadira", 11, "nadira.ali@gmailtemplate.com", 'UOB');

        expect(intern.renderSchool()).toEqual("UOB");
    });

    test('should generate employee role', () => {
        const intern = new Intern("Nadira", 11, "nadira.ali@gmailtemplate.com", 'UOB');

        expect(intern.renderRole()).toEqual('Intern');
    });
}); 
