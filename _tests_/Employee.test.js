/* Importing Employer constructor function through require method */
const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should generate employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object")
  });

  test("should generate employee name when renderName() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderName()).toEqual("Nadira");
  });

  test("should generate employee ID when renderID() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderID()).toEqual(11);
  });

  test("should generate employee email when renderEmail() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderEmail()).toEqual("nadira.ali@gmailtemplate.com");
  });

  test("should generate employee role when renderRole() function is called", () => {
    const employee = new Employee("Nadira", 11, "nadira.ali@gmailtemplate.com");

    expect(employee.renderRole()).toEqual("Employee");
  });
});
