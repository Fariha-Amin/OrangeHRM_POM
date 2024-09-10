import PIMPageObjects from "../Wiring/PIMPageObjects";
import AddEmployeePage from "./AddEmployeePage";

const pimPageObject = new PIMPageObjects();

/**
 * Handles interactions with the PIM (Personnel Information Management) page.
 */
class PIMPage {

    /**
     * Clicks the "Add Employee" button and returns an instance of the `AddEmployeePage`.
     * @returns {AddEmployeePage} - An instance of the `AddEmployeePage` class.
     */
    clickAddEmployeeButton() {
        cy.get(pimPageObject.getAddEmployeeButton()).click();
        const addEmployeePage = new AddEmployeePage();
        return addEmployeePage;
    }

    /**
     * Enters the employee ID into the employee ID field.
     * @param {string} employeeID - The employee ID to enter.
     * @returns {PIMPage} - The instance of this class for chaining.
     */
    enterEmployeeID(employeeID) {
        cy.get(pimPageObject.getEmployeeIDField())
            .parent().siblings('div').find('input').type(employeeID);
        return this;
    }

    /**
     * Clicks the search button to search for employees.
     * @returns {PIMPage} - The instance of this class for chaining.
     */
    clickSearchEmployeeButton() {
        cy.get(pimPageObject.getEmployeeSearchButton()).click({ force: true });
        return this;
    }

    /**
     * Verifies that the employee data for a specific employee ID is visible in the employee table.
     * @param {string} employeeID - The employee ID to verify.
     * @returns {PIMPage} - The instance of this class for chaining.
     */
    verifyEmployeeDataIsVisible(employeeID) {
        cy.get(pimPageObject.getEmployeeTable())
            .find("div[role='cell']").contains(employeeID).should('be.visible');
        return this;
    }
}

export default PIMPage;
