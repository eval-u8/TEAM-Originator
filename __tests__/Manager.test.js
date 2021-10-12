const Manager = require("../lib/Manager");

jest.mock("../lib/Manager");

test("creates a manager  object", () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.name.length).toBeGreaterThan(0);
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.email.length).toBeGreaterThan(0);
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.role).toEqual(expect.any(String));

    console.log(manager.name);
    console.log(manager.id);
    console.log(manager.email);
    console.log(manager.officeNumber);
    console.log(manager.role);
});
