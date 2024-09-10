import AddEmployeePageObjects from "../Wiring/AddEmployeePageObjects";
const addEmployeePageObject = new AddEmployeePageObjects();
import ReusableMethods from "./ReusableMethods";

/**
 * Handles interactions with the "Add Employee" page.
 */
class AddEmployeePage {

    /**
     * Enters the first name in the input field.
     * @param {string} firstName - The first name to enter.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    enterFirstName(firstName) {
        cy.get(addEmployeePageObject.getFirstNameInputField()).type(firstName);
        return this;
    }

    /**
     * Enters the last name in the input field.
     * @param {string} lastName - The last name to enter.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    enterLastName(lastName) {
        cy.get(addEmployeePageObject.getLastNameInputField()).type(lastName);
        return this;
    }

    /**
     * Clicks the toggle button for login details.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    clickLoginDetailsToggleButton() {
        cy.get(addEmployeePageObject.getLoginDetailsToggleButton()).click({ force: true });
        return this;
    }

    /**
     * Enters the username in the appropriate field.
     * @param {string} userName - The username to enter.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    enterUserName(userName) {
        cy.get(addEmployeePageObject.getUserName()).parent().siblings('div').find('input').type(userName);
        return this;
    }

    /**
     * Enters the password in the appropriate field.
     * @param {string} password - The password to enter.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    enterPassword(password) {
        cy.get(addEmployeePageObject.getPassword()).parent().siblings('div').find('input').type(password);
        return this;
    }

    /**
     * Enters the confirm password in the appropriate field.
     * @param {string} confirmedPassword - The confirmed password to enter.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    enterConfirmPassword(confirmedPassword) {
        cy.get(addEmployeePageObject.getConfirmPassword()).parent().siblings('div').find('input').type(confirmedPassword);
        return this;
    }

    /**
     * Saves the employee information to a file.
     * @param {string} employeeDataFile - The filename to save the employee data.
     * @param {string} username - The username to save.
     * @param {string} password - The password to save.
     * @returns {AddEmployeePage} - The instance of this class for chaining.
     */
    saveEmployeeInfo(employeeDataFile, username, password) {
        cy.get(addEmployeePageObject.getEmployeeId()).parent().siblings('div').find('input').invoke('val').then(employeeId => {
            cy.writeFile(`cypress/fixtures/${employeeDataFile}`, {
                username,
                password,
                employeeId
            });
        });
        return this;
    }

    /**
     * Clicks the save button and returns an instance of `ReusableMethods`.
     * @returns {ReusableMethods} - An instance of the `ReusableMethods` class.
     */
    clickSaveButton() {
        cy.get(addEmployeePageObject.getSaveButton()).click({ force: true });
        const reusableMethods = new ReusableMethods();
        return reusableMethods;
    }

}

export default AddEmployeePage;
