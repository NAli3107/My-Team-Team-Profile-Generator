/* Importing Employer constructor function through require method */
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    test('should generate engineer object', () => {
        const engineer = new Engineer("Nadira", 11, "nadira.ali@gmailtemplate.com", 'Nali3107');

        expect(engineer.gitUsername) .toEqual(expect.any(String));
    });

    test('should generate employee github username', () => {
        const engineer = new Engineer("Nadira", 11, "nadira.ali@gmailtemplate.com", 'Nali3107');

        expect(engineer.rendergitUserName()).toEqual(expect.stringContaining(engineer.gitUsername.toString()));
    });

    test('should generate employee role', () => {
        const engineer = new Engineer("Nadira", 11, "nadira.ali@gmailtemplate.com", 'Nali3107');

        expect(engineer.renderRole()).toEqual('Engineer');
    });
}) 
