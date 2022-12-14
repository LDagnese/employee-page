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

test("Can get id via getId()", () => {
  const id = 1;
  const emp = new Employee(id, "Lou", "email");
  expect(emp.getId()).toBe(id);
});

test("Can get email via getEmail()", () => {
  const email = `louis@email.com`;
  const emp = new Employee(1, "lou", email);
  expect(emp.getEmail()).toBe(email);
});

test(`getRole() returns "Employee"`, () => {
  const test = `Employee`;
  const emp = new Employee(1, `Lou`, `email`);
  expect(emp.getRole()).toBe(test);
});
