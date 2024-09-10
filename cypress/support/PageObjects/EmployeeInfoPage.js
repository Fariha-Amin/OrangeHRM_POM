import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects";
import CommonPageObjects from "../Wiring/CommonPageObjects";
import ReusableMethods from "./ReusableMethods";

const employeeInfoObject = new EmployeeInfoPageObjects();
const commonPageObject = new CommonPageObjects();

/**
 * Handles interactions with the Employee Info page.
 */
class EmployeeInfoPage {

    /**
     * Expands the nationality dropdown to show the list of options.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    expandNationalityDropdown() {
        cy.get(employeeInfoObject.getNationalityDropdown())
            .parent('div').siblings('div').find(employeeInfoObject.getDropdownArrow())
            .scrollIntoView().click({ force: true });
        return this;
    }

    /**
     * Selects a nationality from the dropdown list.
     * @param {string} expectedNationality - The nationality to select from the dropdown.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    selectNationality(expectedNationality) {
        cy.get(employeeInfoObject.getDropdownList())
            .contains(expectedNationality).click({ force: true });
        return this;
    }

    /**
     * Clicks the save button in the personal information section.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    clickPersonalInfoSaveButton() {
        // Uncomment and adjust the selector if needed
        // cy.get(employeeInfoObject.getPersonalDetailsSection())
        //    .parent('div').find(commonPageObject.getSubmitButton())
        //    .scrollIntoView().click({ force: true });
        cy.get(commonPageObject.getSubmitButton()).eq(0).click();
        return this;
    }

    /**
     * Clicks the save button in the custom information section.
     * @returns {ReusableMethods} - An instance of the `ReusableMethods` class.
     */
    clickCustomInfoSaveButton() {
        cy.get(employeeInfoObject.getCustomDetailsSection())
            .parent('div').find(commonPageObject.getSubmitButton())
            .scrollIntoView().click({ force: true });
        const reusableMethods = new ReusableMethods();
        return reusableMethods;
    }

    /**
     * Clicks the radio button to select the female gender.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    clickFemaleGenderRadioButton() {
        cy.get(employeeInfoObject.getFemaleGenderRadioButton())
            .find("input[type='radio']").click({ force: true });
        return this;
    }

    /**
     * Expands the blood group dropdown to show the list of options.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    expandBloodGroupDropdown() {
        cy.get(employeeInfoObject.getBloodGroupDropdown())
            .parent('div').siblings('div').find(employeeInfoObject.getDropdownArrow())
            .scrollIntoView().click({ force: true });
        return this;
    }

    /**
     * Selects a blood group from the dropdown list.
     * @param {string} expectedGroup - The blood group to select from the dropdown.
     * @returns {EmployeeInfoPage} - The instance of this class for chaining.
     */
    selectBloodGroup(expectedGroup) {
        cy.get(employeeInfoObject.getDropdownList())
            .contains(expectedGroup).click({ force: true });
        return this;
    }
}

export default EmployeeInfoPage;
