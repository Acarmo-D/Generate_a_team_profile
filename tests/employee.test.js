const employee = require("../Generate_a_team_profile/employee.js");
const employee = new employee("soulja", "678998212", "souljaboy@tellem.com");

test("test if we can  get the constructor values for the employee object", () => {
  expect(employee.name).toBe("soulja");
  expect(employee.id).toBe("678998212");
  expect(employee.email).toBe("souljaboy@tellem.com");
});

test("test if we can get the name from the getName() method", () => {
  expect(employee.getName()).toBe("soulja");
});

test("test if we can get the id from the getID() method", () => {
  expect(employee.getId()).toBe("678998212");
});
test("test if we can get the email from the getEmail() method", () => {
  expect(employee.getEmail()).toBe("souljaboy@tellem.com");
});
test("test if we can get the role from the getRole() method", () => {
  expect(employee.getRole()).toBe("employee");
});
