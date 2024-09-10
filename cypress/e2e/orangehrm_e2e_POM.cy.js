import { faker } from '@faker-js/faker';
import ReusableMethods from '../support/PageObjects/ReusableMethods';
import SideNavbar from '../support/PageObjects/SideNavbar';
import PIMPage from '../support/PageObjects/PIMPage';
import EmployeeInfoPage from '../support/PageObjects/EmployeeInfoPage';
import DirectoryPage from '../support/PageObjects/DirectoryPage';
import TopNavbar from '../support/PageObjects/TopNavbar';

/**
 * End-to-end test suite for OrangeHRM using the Page Object Model (POM).
 */
describe('OrangeHRM End to End Testing with POM', () => {

  let adminCredentials;
  let lastUrl;
  let adminUser = true;
  const employeeDataFile = "employeeData.json";
  const reusable = new ReusableMethods();
  const sideNavbar = new SideNavbar();
  const pimPage = new PIMPage();
  const employeeInfo = new EmployeeInfoPage();
  const directoryPage = new DirectoryPage();
  const topNavbar = new TopNavbar();

  // Generate data for testing
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = firstName + lastName;
  const fullName = firstName + " " + lastName;
  const password = reusable.generatePassword();

  /**
   * Runs before all tests in this suite to load admin credentials from a fixture file.
   */
  before(() => {
    cy.fixture("values").then((loadedValues) => {
      adminCredentials = loadedValues;
    });
  });

  /**
   * Runs before each test to log in as either an admin or employee based on the `adminUser` flag.
   */
  beforeEach(() => {
    if (adminUser) {
      cy.LoginAsAdmin(adminCredentials);
    } else {
      cy.LoginAsEmployee(employeeDataFile);
    }
  });

  /**
   * Test case to create a new employee and verify the success message and header visibility.
   */
  it('Creating a New Employee', () => {
    cy.visit('/');
    reusable.VerifyExpectedHeaderIsVisible("Dashboard");
    sideNavbar.clickOnModuleTab('PIM')
      .VerifyExpectedHeaderIsVisible('PIM');
    pimPage.clickAddEmployeeButton()
      .enterFirstName(firstName)
      .enterLastName(lastName)
      .clickLoginDetailsToggleButton()
      .enterUserName(username)
      .enterPassword(password)
      .enterConfirmPassword(password)
      .saveEmployeeInfo(employeeDataFile, username, password)
      .clickSaveButton()
      .verifyToastMessage("Successfully Saved")
      .VerifyExpectedHeaderIsVisible(fullName);
  });

  /**
   * Test case to update an employee's nationality and verify the success message.
   */
  it('Update Employee Nationality', () => {
    cy.visit(lastUrl);
    employeeInfo.expandNationalityDropdown()
      .selectNationality('Algerian')
      .clickPersonalInfoSaveButton();
    reusable.verifyToastMessage('Successfully Updated');
  });

  /**
   * Test case to search for an employee by ID and verify that the data is visible in the results.
   */
  it('Search by Employee ID', () => {
    cy.visit(lastUrl);
    sideNavbar.clickOnModuleTab('PIM')
      .VerifyExpectedHeaderIsVisible('PIM');
    cy.fixture(employeeDataFile).then((employee) => {
      pimPage.enterEmployeeID(employee.employeeId)
        .clickSearchEmployeeButton()
        .verifyEmployeeDataIsVisible(employee.employeeId);
    });
  });

  /**
   * Test case to search for an employee by name in the directory and verify the employee card header name.
   */
  it('Search in Directory by Employee Name', () => {
    cy.visit(lastUrl);
    sideNavbar.clickOnModuleTab('Directory')
      .VerifyExpectedHeaderIsVisible('Directory');
    directoryPage.enterEmployeeName(firstName)
      .clickAutoCompleteDropdown()
      .clickSearchButton()
      .verifyEmployeeCardHeaderName(fullName);
  });

  /**
   * Test case to log out as an admin and clear cookies and local storage.
   */
  it('Logout', () => {
    cy.visit(lastUrl);
    topNavbar.expandUserDropdown()
      .clickLogoutOption();
    adminUser = false;
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  /**
   * Test case to log in with new employee credentials and verify the dashboard and username visibility.
   */
  it('Login with New Employee Credentials', () => {
    cy.visit('/');
    reusable.VerifyExpectedHeaderIsVisible('Dashboard');
    topNavbar.matchUserNameText(fullName);
  });

  /**
   * Test case to update user information and verify that the updates are saved successfully.
   */
  it('Update User Info', () => {
    cy.visit(lastUrl);
    sideNavbar.clickOnModuleTab('My Info')
      .VerifyExpectedHeaderIsVisible(fullName);
    employeeInfo.clickFemaleGenderRadioButton()
      .clickPersonalInfoSaveButton();
    employeeInfo.expandBloodGroupDropdown()
      .selectBloodGroup('O+');
    reusable.verifyToastMessage('Successfully Updated');
    employeeInfo.clickCustomInfoSaveButton();
    reusable.verifyToastMessage('Successfully Saved');
  });

  /**
   * Test case to log out as a new employee
   */
  it('Logout as New Employee', () => {
    cy.visit(lastUrl);
    topNavbar.expandUserDropdown()
      .clickLogoutOption();
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  /**
   * Runs after each test to save the current URL for reference in subsequent tests.
   */
  afterEach(() => {
    cy.url().then((url) => {
      lastUrl = url;
    });
  });

  /**
   * Runs after all tests to clear the employee data file.
   */
  after(() => {
    cy.writeFile(`cypress/fixtures/${employeeDataFile}`, {});
  });
});
