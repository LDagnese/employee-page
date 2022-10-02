const Manager = require("../lib/Manager");

test("Can set the officeNumber of a Manager", () => {
  const officeTest = 1;
  const manager = new Manager(1, `lou`, `email`, officeTest);
  expect(manager.officeNumber).toBe(officeTest);
});
