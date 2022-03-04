/* Importing Employer constructor function through require method */
const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should generate employee object", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  test("should generate employee name when renderName() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderName()).toEqual(expect.any(String));
  });

  test("should generate employee ID when renderID() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderID()).toEqual(expect.any(Number));
  });

  test("should generate employee email when renderEmail() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });

  test("should generate employee role when renderRole() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderRole()).toEqual("Employee");
  });
});
