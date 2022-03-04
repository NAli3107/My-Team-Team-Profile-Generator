/* Importing Employer constructor function through require method */
const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should generate employee object", () => {
    const employee = new Employee("Nadira", 11, "email");

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
  });

  
});
