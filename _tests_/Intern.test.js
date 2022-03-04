/* Importing Employer constructor function through require method */
const Intern = require('../lib/Intern');

describe('Intern', () => {
    test('should generate intern object', () => {
        const intern = new Intern("Nadira", 11, "nadira.ali@gmailtemplate.com", 'UOB');

        expect(intern.renderSchool).toEqual(expect.any(String));
    });

    test('should generate employee school', () => {
        const intern = new Intern("Nadira", 11, "nadira.ali@gmailtemplate.com", 'UOB');

        expect(intern.renderSchool()).toEqual(expect.stringContaining(intern.renderSchool.toString()));
    });

    test('should generate employee role', () => {
        const intern = new Intern("Nadira", 11, "nadira.ali@gmailtemplate.com", 'UOB');

        expect(intern.renderRole()).toEqual('Intern');
    });
}) 
