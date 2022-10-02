const Employee = require("../lib/Employee");

test("Instantiate Employee object", () => {
  const emp = new Employee();
  expect(typeof emp).toBe("object");
});

test("Set Employee name, id and email", () => {
  const name = "Louis";
  const id = 1;
  const email = "louis@email.com";
  const emp = new Employee(id, name, email);
  expect(emp.name).toBe(name);
  expect(emp.id).toBe(id);
  expect(emp.email).toBe(email);
});

test("Can get name via getName()", () => {
  const name = "louis";
  const emp = new Employee(1, name, "email");
  expect(emp.getName()).toBe(name);
});
