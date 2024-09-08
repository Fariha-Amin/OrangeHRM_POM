const employeeNameField = "label:contains('Employee Name')"
const autoCompleteDropdown = '.oxd-autocomplete-option > span'
const cardHeader = ".orangehrm-directory-card-header"
class DirectoryPageObjects {

    getEmployeeNameField() {
        return employeeNameField;
    }
    getAutoCompleteDropdown() {
        return autoCompleteDropdown;
    }
    getCardHeader() {
        return cardHeader;
    }

}

export default DirectoryPageObjects;