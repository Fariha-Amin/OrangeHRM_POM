const nationalityDropdown = "label:contains('Nationality')"
const bloodGroupDropdown = "label:contains('Blood Type')"
const DropdownArrow = ".oxd-select-text--arrow"
const DropdownList = "div[role='listbox']"
const personalDetailsSection ="h6:contains('Personal Details')"
const customDetailsSection ="h6:contains('Custom Fields')"
const femaleGenderRadioButton = "label:contains('Female')"
/**
 * A class representing the page object for the employee information page.
 * This class provides methods to retrieve selectors for various elements on the employee information page,
 * including dropdowns, sections, and radio buttons.
 */
class EmployeeInfoPageObjects {

    /**
     * Gets the selector for the nationality dropdown.
     * This selector is used to identify and interact with the dropdown menu for selecting nationality.
     * @returns {string} The selector string for the nationality dropdown.
     */
    getNationalityDropdown() {
        return nationalityDropdown;
    }

    /**
     * Gets the selector for the blood group dropdown.
     * This selector is used to identify and interact with the dropdown menu for selecting blood type.
     * @returns {string} The selector string for the blood group dropdown.
     */
    getBloodGroupDropdown() {
        return bloodGroupDropdown;
    }

    /**
     * Gets the selector for the dropdown arrow.
     * This selector is used to identify and interact with the arrow of a dropdown menu.
     * @returns {string} The selector string for the dropdown arrow.
     */
    getDropdownArrow() {
        return DropdownArrow;
    }

    /**
     * Gets the selector for the dropdown list.
     * This selector is used to identify and interact with the list of options within a dropdown menu.
     * @returns {string} The selector string for the dropdown list.
     */
    getDropdownList() {
        return DropdownList;
    }

    /**
     * Gets the selector for the personal details section.
     * This selector is used to identify and interact with the section of the page that contains personal details.
     * @returns {string} The selector string for the personal details section.
     */
    getPersonalDetailsSection() {
        return personalDetailsSection;
    }

    /**
     * Gets the selector for the custom details section.
     * This selector is used to identify and interact with the section of the page that contains custom fields.
     * @returns {string} The selector string for the custom details section.
     */
    getCustomDetailsSection() {
        return customDetailsSection;
    }

    /**
     * Gets the selector for the female gender radio button.
     * This selector is used to identify and interact with the radio button for selecting the female gender.
     * @returns {string} The selector string for the female gender radio button.
     */
    getFemaleGenderRadioButton() {
        return femaleGenderRadioButton;
    }
}

export default EmployeeInfoPageObjects;
