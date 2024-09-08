const { faker } = require('@faker-js/faker');
import MainMenu from '../pageObjects/mainMenu';
import AddEmployee from '../pageObjects/addEmployee';
import Directory from '../pageObjects/directory';
import UserMenu from '../pageObjects/userMenu';
import MyInfo from '../pageObjects/myInfoPage';
import ReusableMethods from '../support/PageObjects/ReusableMethods';
import SideNavbar from '../support/PageObjects/SideNavbar';
import PIMPage from '../support/PageObjects/PIMPage';
describe('OrangeHRM End to End Testing with POM', () => {

  let adminCredentials;
  let lastUrl;
  let adminUser = true;
  let newEmployeeCredentials;
  const employeeDataFile = "employeeData.json";
  const reusable = new ReusableMethods();
  const sideNavbar = new SideNavbar();
  const pimPage = new PIMPage();


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

  /*it('Search in Directory by Employee Name', () => {
    cy.visit(lastUrl)
    const mainMenu = new MainMenu();
    const directory = new Directory();
    mainMenu.getDirectory().click()
    cy.waitTillElementIsVisible('h6');
    cy.get('h6').should("contain.text", 'Directory');

    cy.fixture(employeeDataFile).then((employee) => {
      directory.getEmployeeNameField().type(firstName)
      directory.getAutoCompleteDropdown().click()
      directory.getSearchButton().click()
      directory.getEmployeeCardHeader()
        .invoke('text')
        .then((text) => {
          const normalizedText = text.replace(/\s+/g, ' ').trim();
          expect(normalizedText).to.eq(fullName);
        });

    })


  })

  it('Logout', () => {

    cy.visit(lastUrl)
    const userMenu = new UserMenu()
    userMenu.getUserMenu().click({ force: true })
    userMenu.getLogoutOption().click({ force: true })
    adminUser = false;
    cy.clearCookies();
    cy.clearLocalStorage();
  })

  it('Login with New Employee Credentials', () => {
    cy.visit('/');
    const userMenu = new UserMenu()
    cy.waitTillElementIsVisible('h6');
    cy.get('h6').should("have.text", "Dashboard");
    userMenu.getUserNameText().should('contain.text', fullName)

  });

  it('Update User Info', () => {

    const myInfo = new MyInfo();
    cy.visit(lastUrl);
    const mainMenu = new MainMenu();
    mainMenu.getMyInfo().click({ force: true })
    cy.waitTillElementIsVisible('h6');
    cy.get('h6').should("contain.text", fullName);
    myInfo.getFemaleGenderRadioButton().scrollIntoView().click({ force: true })
    myInfo.getPersonalDetailsSaveButton().click({ force: true })
    myInfo.getBloodGroupDropdown().scrollIntoView().click({ force: true })
    myInfo.SelectBloodGroup('O+').click({ force: true })
    myInfo.getCustomDetailsSaveButton().click({ force: true })
    myInfo.getSuccessToastMessage().should("have.text", "Successfully Saved");

  });

  it('Logout as New Employee', () => {
    cy.visit(lastUrl)
    const userMenu = new UserMenu()
    userMenu.getUserMenu().click({ force: true })
    userMenu.getLogoutOption().click({ force: true })
    adminUser = false;
    //clearing admin session
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
    cy.writeFile(`cypress/fixtures/${employeeDataFile}`, {});
  });
});