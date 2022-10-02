const Employee = require("../lib/Employee");

test("Instantiate Employee object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});
