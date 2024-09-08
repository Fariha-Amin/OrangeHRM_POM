/// <reference types="cypress" />
import LoginPage from "../pageObjects/loginpage";


Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

Cypress.Commands.add('login', (values) => {

  cy.log(values)
  const loginPage = new LoginPage()
  loginPage.getLoginUsername().type(values.username);
  loginPage.getLoginPassword().type(values.password);
  loginPage.getLoginButton().click({ force: true });


})
Cypress.Commands.add('LoginAsAdmin', (adminCredentials) => {
  Cypress.config('pageLoadTimeout', 10000);
  cy.session('Login as Admin', () => {
      cy.visit('/');
      cy.title().should("eq", "OrangeHRM");
      cy.login(adminCredentials);
  });
});
Cypress.Commands.add('LoginAsEmployee', (employeeDataFile) => {
  cy.fixture(employeeDataFile).then((employee) => {
      let newEmployeeCredentials = {
          username: employee.username,
          password: employee.password
      };
      cy.session('Login as New Employee', () => {
          cy.visit('/');
          cy.login(newEmployeeCredentials);
      });

  });
});

Cypress.Commands.add("waitTillElementIsVisible", (selector, timeout = 10000) => {
  cy.get(selector, { timeout }).should("be.visible")
});