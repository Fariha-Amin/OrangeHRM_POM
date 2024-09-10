const addButton = "button[type='button']:contains('Add')";
const employeeIDField = "label:contains('Employee Id')";
const employeeSearchButton = "button[type='submit']:contains('Search')"
const employeeTable = '.orangehrm-employee-list'
/**
 * A class representing the page object for the PIM (Personnel Information Management) page.
 * This class provides methods to retrieve selectors for various elements on the PIM page, 
 * including buttons, fields, and tables related to employee management.
 */
class PIMPageObjects {

    /**
     * Gets the selector for the "Add Employee" button.
     * This selector is used to identify and interact with the button for adding a new employee.
     * @returns {string} The selector string for the "Add Employee" button.
     */
    getAddEmployeeButton() {
        return addButton;
    }

    /**
     * Gets the selector for the employee ID field.
     * This selector is used to identify and interact with the field where the employee ID can be entered or viewed.
     * @returns {string} The selector string for the employee ID field.
     */
    getEmployeeIDField() {
        return employeeIDField;
    }

    /**
     * Gets the selector for the employee search button.
     * This selector is used to identify and interact with the button for searching employees.
     * @returns {string} The selector string for the employee search button.
     */
    getEmployeeSearchButton() {
        return employeeSearchButton;
    }

    /**
     * Gets the selector for the employee table.
     * This selector is used to identify and interact with the table that lists employee information.
     * @returns {string} The selector string for the employee table.
     */
    getEmployeeTable() {
        return employeeTable;
    }
}

export default PIMPageObjects;
