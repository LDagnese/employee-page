const Engineer = require(`../lib/Engineer`);

test(`Can set Github username via constructor`, () => {
  const userName = `Foo`;
  const eng = new Engineer(1, `lou`, `email`, userName);
  expect(eng.githubName).toBe(userName);
});
