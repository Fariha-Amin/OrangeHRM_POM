const employeeNameField = "label:contains('Employee Name')"
const autoCompleteDropdown = '.oxd-autocomplete-option > span'
const cardHeader = ".orangehrm-directory-card-header"
/**
 * A class representing the page object for the directory page.
 * This class provides methods to retrieve selectors for elements specific to the directory page, 
 * such as fields for employee names, autocomplete dropdowns, and card headers.
 */
class DirectoryPageObjects {

    /**
     * Gets the selector for the "Employee Name" field.
     * This selector is used to identify and interact with the field where the employee name can be entered.
     * @returns {string} The selector string for the "Employee Name" field.
     */
    getEmployeeNameField() {
        return employeeNameField;
    }

    /**
     * Gets the selector for the autocomplete dropdown options.
     * This selector is used to identify and interact with the options in the autocomplete dropdown.
     * @returns {string} The selector string for the autocomplete dropdown options.
     */
    getAutoCompleteDropdown() {
        return autoCompleteDropdown;
    }

    /**
     * Gets the selector for the card header element in the directory.
     * This selector is used to identify and interact with the header section of the directory cards.
     * @returns {string} The selector string for the card header element.
     */
    getCardHeader() {
        return cardHeader;
    }
}

export default DirectoryPageObjects;
