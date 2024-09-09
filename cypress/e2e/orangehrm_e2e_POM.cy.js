const { faker } = require('@faker-js/faker');
import MainMenu from '../pageObjects/mainMenu';
import AddEmployee from '../pageObjects/addEmployee';
import Directory from '../pageObjects/directory';
import UserMenu from '../pageObjects/userMenu';
import MyInfo from '../pageObjects/myInfoPage';
import ReusableMethods from '../support/PageObjects/ReusableMethods';
import SideNavbar from '../support/PageObjects/SideNavbar';
import PIMPage from '../support/PageObjects/PIMPage';
import EmployeeInfoPage from '../support/PageObjects/EmployeeInfoPage';
import DirectoryPage from '../support/PageObjects/DirectoryPage';
import TopNavbar from '../support/PageObjects/TopNavbar';
describe('OrangeHRM End to End Testing with POM', () => {

  let adminCredentials;
  let lastUrl;
  let adminUser = true;
  let newEmployeeCredentials;
  const employeeDataFile = "employeeData.json";
  const reusable = new ReusableMethods();
  const sideNavbar = new SideNavbar();
  const pimPage = new PIMPage();
  const employeeInfo = new EmployeeInfoPage();
  const directoryPage = new DirectoryPage();
  const topNavbar = new TopNavbar();


  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = firstName + lastName;
  const fullName = firstName + " " + lastName;
  const password = reusable.generatePassword();


  before(() => {

    cy.fixture("values").then((loadedValues) => {
      adminCredentials = loadedValues;
    });
  });

  beforeEach(() => {
    if (adminUser) {
      cy.LoginAsAdmin(adminCredentials)
    } else if (!adminUser) {
      cy.LoginAsEmployee(employeeDataFile)
    }
  });


  it('Creating a New Employee', () => {

    cy.visit('/');
    reusable.VerifyExpectedHeaderIsVisible("Dashboard")
    sideNavbar.clickOnModuleTab('PIM')
      .VerifyExpectedHeaderIsVisible('PIM')
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
      .VerifyExpectedHeaderIsVisible(fullName)

  });

  it('Update Employee Nationality', () => {
    cy.visit(lastUrl)
    employeeInfo.expandNationalityDropdown()
      .selectNationality('Algerian')
      .clickPersonalInfoSaveButton()
      reusable.verifyToastMessage('Successfully Updated')



  })

  it('Search by Employee ID', () => {
    cy.visit(lastUrl)
    sideNavbar.clickOnModuleTab('PIM')
      .VerifyExpectedHeaderIsVisible('PIM')
    cy.fixture(employeeDataFile).then((employee) => {
      pimPage.enterEmployeeID(employee.employeeId)
        .clickSearchEmployeeButton()
        .verifyEmployeeDataIsVisible(employee.employeeId)

    })
  })

  it('Search in Directory by Employee Name', () => {
    cy.visit(lastUrl)
    sideNavbar.clickOnModuleTab('Directory')
      .VerifyExpectedHeaderIsVisible('Directory')
    directoryPage.enterEmployeeName(firstName)
      .clickAutoCompleteDropdown()
      .clickSearchButton()
      .verifyEmployeeCardHeaderName(fullName)

  })

  it('Logout', () => {

    cy.visit(lastUrl)
    topNavbar.expandUserDropdown()
      .clickLogoutOption()
    adminUser = false;
    cy.clearCookies();
    cy.clearLocalStorage();
  })

  it('Login with New Employee Credentials', () => {
    cy.visit('/');
    //logged in as the new employee from beforeEach hook as adminUser is set to false now
    reusable.VerifyExpectedHeaderIsVisible('Dashboard')
    topNavbar.matchUserNameText(fullName)

  });

  it('Update User Info', () => {
    cy.visit(lastUrl);
    sideNavbar.clickOnModuleTab('My Info')
      .VerifyExpectedHeaderIsVisible(fullName)
    employeeInfo.clickFemaleGenderRadioButton()
    employeeInfo.clickPersonalInfoSaveButton()
    employeeInfo.expandBloodGroupDropdown()
      .selectBloodGroup('O+')
    reusable.verifyToastMessage('Successfully Updated')
    employeeInfo.clickCustomInfoSaveButton()
    reusable.verifyToastMessage('Successfully Saved')

  });

  /*it('Logout as New Employee', () => {
    cy.visit(lastUrl)
    topNavbar.expandUserDropdown()
      .clickLogoutOption()
    adminUser = true;
    cy.clearCookies();
    cy.clearLocalStorage();
  })*/



  afterEach(() => {
    cy.url().then((url) => {
      lastUrl = url;
    })
  })
  after(() => {

    // clearing employeeData object after all tests are completed
    //cy.writeFile(`cypress/fixtures/${employeeDataFile}`, {});
  });
});