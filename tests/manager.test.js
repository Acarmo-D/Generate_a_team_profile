const manager = require("../manager");
const Manager = new manager(
  "jenny",
  "8675309",
  "jennytutones@gmail.com",
  "1981"
);

Test("test if we canget the constructor values for the manager object", () => {
  expect(manager.name).toBe("jenny");
  expect(manager.id).toBe("8675309");
  expect(manager.email).toBe("jennytutones@gmail.com");
  expect(manager.officeNumber).toBe("1981");
});

Test("test if we can get the name from the getName() method", () => {
  expect(manager.getname()).toBe("jenny");
});

test("test if we can get the id from the getID() method", () => {
  expect(manager.getId()).toBe("8675309");
});

test("test if we can get the email from the getEmail() method", () => {
    expect(manager.getEmail()).toBe("jennytutones@gmail.com");
  });

  test("test if we can get the role from the getRole() method", () => {
    expect(manager.getRole()).toBe("manager");
  });

  test("test if we can get the id from the getOfficeNumber() method", () => {
    expect(manager.getOfficeNumber()).toBe("1981");
  });
