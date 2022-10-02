const Intern = require(`../lib/Intern`);

test(`Can set an Intern's School via the contructor`, () => {
  const school = `Foo`;
  const intern = new Intern(1, `lou`, `email`, school);
  expect(intern.school).toBe(school);
});

test(`Can get an Intern's school via getSchool()`, () => {
  const school = `Foo`;
  const intern = new Intern(1, `lou`, `email`, school);
  expect(intern.getSchool()).toBe(school);
});

test(`getRole() returns "Intern"`, () => {
  const testValue = "Intern";
  const intern = new Intern(1, `lou`, `email`, `foo`);
  expect(intern.getRole()).toBe(testValue);
});
