/// <reference types="cypress" />
import LoginPage from "./PageObjects/LoginPage";

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const loginPage = new LoginPage();
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