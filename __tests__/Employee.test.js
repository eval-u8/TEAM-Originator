const Employee = require("../lib/Employee");

jest.mock("../lib/Employee");

test("creates an employee object", () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.name.length).toBeGreaterThan(0);
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.email.length).toBeGreaterThan(0);

    console.log(employee.name);
    console.log(employee.id);
    console.log(employee.email);
});

