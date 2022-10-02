const Manager = require("../lib/Manager");

test("Can set the officeNumber of a Manager", () => {
  const officeTest = 1;
  const manager = new Manager(1, `lou`, `email`, officeTest);
  expect(manager.officeNumber).toBe(officeTest);
});

test(`getRole() should return "Manager"`, () => {
  const roleTest = "Manager";
  const manager = new Manager(1, `lou`, `email`, 1);
  expect(manager.getRole()).toBe(roleTest);
});

test(`Can get officeNumber using getOfficeNumber()`, () => {
  const officeTest = 1;
  const manager = new Manager(1, `lou`, `email`, officeTest);
  expect(manager.getOfficeNumber()).toBe(officeTest);
});
