const Engineer = require(`../lib/Engineer`);

test(`Can set Github username via constructor`, () => {
  const userName = `Foo`;
  const eng = new Engineer(1, `lou`, `email`, userName);
  expect(eng.githubName).toBe(userName);
});

test(`Can get Github username via getGitHub()`, () => {
    const userName = `Foo`;
    const eng = new Engineer(1, `lou`, `email`, userName);
    expect(eng.getGitHub()).toBe(userName);
})

test(`getRole() should return "Engineer"`, () => {
    const roleTest = "Engineer";
    const eng = new Engineer(1, `lou`, `email`, `name`);
    expect(eng.getRole()).toBe(roleTest);
  });