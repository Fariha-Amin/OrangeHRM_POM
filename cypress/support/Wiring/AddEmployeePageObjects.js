const firstNameInputField = "input[name='firstName'"
const lastNameInputField = "input[name='lastName'"
const loginDetailsToggleButton = "input[type='checkbox']"
const username = "label:contains('Username')"
const password = "label:contains('Password'):not(:contains('Confirm'))"
const confirmPassword = "label:contains('Confirm Password')"
const employeeID = "label:contains('Employee Id')"
const saveButton = "button[type='submit']:contains('Save')"
/**
 * A class representing the page object for adding an employee.
 * This class provides methods to retrieve selectors for various elements on the "Add Employee" page.
 */
class AddEmployeePageObjects {

    /**
     * Gets the selector for the "First Name" input field.
     * @returns {string} The selector string for the "First Name" input field.
     */
    getFirstNameInputField() {
        return firstNameInputField;
    }

    /**
     * Gets the selector for the "Last Name" input field.
     * @returns {string} The selector string for the "Last Name" input field.
     */
    getLastNameInputField() {
        return lastNameInputField;
    }

    /**
     * Gets the selector for the "Login Details" toggle button.
     * @returns {string} The selector string for the "Login Details" toggle button.
     */
    getLoginDetailsToggleButton() {
        return loginDetailsToggleButton;
    }

    /**
     * Gets the selector for the "Username" label.
     * @returns {string} The selector string for the "Username" label.
     */
    getUserName() {
        return username;
    }

    /**
     * Gets the selector for the "Password" label.
     * @returns {string} The selector string for the "Password" label.
     */
    getPassword() {
        return password;
    }

    /**
     * Gets the selector for the "Confirm Password" label.
     * @returns {string} The selector string for the "Confirm Password" label.
     */
    getConfirmPassword() {
        return confirmPassword;
    }

    /**
     * Gets the selector for the "Save" button.
     * @returns {string} The selector string for the "Save" button.
     */
    getSaveButton() {
        return saveButton;
    }

    /**
     * Gets the selector for the "Employee Id" label.
     * @returns {string} The selector string for the "Employee Id" label.
     */
    getEmployeeId() {
        return employeeID;
    }
}

export default AddEmployeePageObjects;
