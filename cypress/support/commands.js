/// <reference types="cypress" />
import LoginPage from "./PageObjects/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const loginPage = new LoginPage();

/**
 * Custom Cypress command to log in a user by providing username and password.
 * This command visits the root page of the application, types in the username and password, 
 * and clicks the login button. It uses methods from the `loginPage` page object to interact 
 * with the login form.
 * @param {Object} values - An object containing login credentials.
 * @param {string} values.username - The username to log in with.
 * @param {string} values.password - The password to log in with.
 * @example
 * cy.login({ username: 'user@example.com', password: 'password123' });
 */
Cypress.Commands.add('login', (values) => {
  cy.visit('/');
  loginPage.typeUsername(values.username)
    .typePassword(values.password)
    .clickLoginButton();
});

/**
 * Custom Cypress command to log in as an admin user using provided credentials.
 * This command uses the `cy.login` command to perform the login action. The session is cached 
 * across specs to improve performance and avoid redundant login actions.
 * @param {Object} adminCredentials - An object containing admin login credentials.
 * @param {string} adminCredentials.username - The admin username to log in with.
 * @param {string} adminCredentials.password - The admin password to log in with.
 * @example
 * cy.LoginAsAdmin({ username: 'admin@example.com', password: 'adminPass123' });
 */
Cypress.Commands.add('LoginAsAdmin', (adminCredentials) => {
  Cypress.config('pageLoadTimeout', 10000);
  cy.session('Login as Admin', () => {
    cy.login(adminCredentials);
  }, {
    cacheAcrossSpecs: true
  });
});

/**
 * Custom Cypress command to log in as an employee using credentials from a fixture file.
 * This command loads employee credentials from a fixture file, then uses the `cy.login` command 
 * to perform the login action. The session is cached across specs for performance optimization.
 * @param {string} employeeDataFile - The name of the fixture file containing employee credentials.
 * @example
 * cy.LoginAsEmployee('employeeData.json');
 */
Cypress.Commands.add('LoginAsEmployee', (employeeDataFile) => {
  cy.fixture(employeeDataFile).then((employee) => {
    let newEmployeeCredentials = {
      username: employee.username,
      password: employee.password
    };
    cy.session('Login as New Employee', () => {
      cy.login(newEmployeeCredentials);
    }, {
      cacheAcrossSpecs: true
    });
  });
});

/**
 * Custom Cypress command to wait until a specified element is visible.
 * This command continuously checks if the element identified by the selector is visible within 
 * the specified timeout period.
 * @param {string} selector - The selector for the element to check visibility.
 * @param {number} [timeout=30000] - The maximum time, in milliseconds, to wait for the element to be visible. Defaults to 30 seconds.
 * @example
 * cy.waitTillElementIsVisible('#loginButton', 15000);
 */
Cypress.Commands.add("waitTillElementIsVisible", (selector, timeout = 30000) => {
  cy.get(selector, { timeout }).should("be.visible");
});
