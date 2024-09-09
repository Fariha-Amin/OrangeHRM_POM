import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects";
import CommonPageObjects from "../Wiring/CommonPageObjects";
import ReusableMethods from "./ReusableMethods";
const employeeInfoObject = new EmployeeInfoPageObjects();
const commonPageObject = new CommonPageObjects();
class EmployeeInfoPage {

    expandNationalityDropdown() {

        cy.get(employeeInfoObject.getNationalityDropdown()).parent('div').siblings('div').find(employeeInfoObject.getDropdownArrow()).scrollIntoView().click({ force: true })
        return this;
    }

    selectNationality(expectedNationality) {
        cy.get(employeeInfoObject.getDropdownList()).contains(expectedNationality).click({ force: true })
        return this;
    }

    clickPersonalInfoSaveButton() {
        //cy.get(employeeInfoObject.getPersonalDetailsSection()).parent('div').find(commonPageObject.getSubmitButton()).scrollIntoView().click({force:true})
        cy.get(commonPageObject.getSubmitButton()).eq(0).click();
        return this
    }

    clickCustomInfoSaveButton() {
        cy.get(employeeInfoObject.getCustomDetailsSection()).parent('div').find(commonPageObject.getSubmitButton()).scrollIntoView().click({force:true})
        const reusableMethods = new ReusableMethods();
        return reusableMethods;
    }

    clickFemaleGenderRadioButton(){
        cy.get(employeeInfoObject.getFemaleGenderRadioButton()).find("input[type='radio']").click({force:true})
        return this;
    }

    expandBloodGroupDropdown() {

        cy.get(employeeInfoObject.getBloodGroupDropdown()).parent('div').siblings('div').find(employeeInfoObject.getDropdownArrow()).scrollIntoView().click({ force: true })
        return this;
    }

    selectBloodGroup(expectedGroup) {
        cy.get(employeeInfoObject.getDropdownList()).contains(expectedGroup).click({ force: true })
        return this;
    }
}

export default EmployeeInfoPage;