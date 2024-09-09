/// <reference types="cypress" />
import LoginPage from "./PageObjects/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const loginPage = new LoginPage();
/**
 * Custom Cypress command to log in a user by providing username and password.
 *
 * This command visits the root page of the application, types in the username and password, 
 * and clicks the login button. It uses methods from the `loginPage` page object to interact 
 * with the login form.
 *
 * @param {Object} values - An object containing login credentials.
 * @param {string} values.username - The username to log in with.
 * @param {string} values.password - The password to log in with.
 * @example
 * cy.login({ username: 'user@example.com', password: 'password123' });
 */
Cypress.Commands.add('login', (values) => {

  cy.visit('/')
  loginPage.typeUsername(values.username)
    .typePassword(values.password)
    .clickLoginButton()


})
Cypress.Commands.add('LoginAsAdmin', (adminCredentials) => {
  Cypress.config('pageLoadTimeout', 10000);
  cy.session('Login as Admin', () => {
    cy.login(adminCredentials);
  }),
  {
    cacheAcrossSpecs: true
  }
});
Cypress.Commands.add('LoginAsEmployee', (employeeDataFile) => {
  cy.fixture(employeeDataFile).then((employee) => {
    let newEmployeeCredentials = {
      username: employee.username,
      password: employee.password
    };
    cy.session('Login as New Employee', () => {
      cy.login(newEmployeeCredentials);
    }),
    {
      cacheAcrossSpecs: true
    }

  });
});

Cypress.Commands.add("waitTillElementIsVisible", (selector, timeout = 30000) => {
  cy.get(selector, { timeout }).should("be.visible")
});