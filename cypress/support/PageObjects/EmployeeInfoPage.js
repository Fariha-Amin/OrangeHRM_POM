import EmployeeInfoPageObjects from "../Wiring/EmployeeInfoPageObjects";
import CommonPageObjects from "../Wiring/CommonPageObjects";
import ReusableMethods from "./ReusableMethods";
const employeeInfoObject = new EmployeeInfoPageObjects();
const commonPageObject = new CommonPageObjects();
class EmployeeInfoPage {

    ExpandNationalityDropdown() {

        cy.get(employeeInfoObject.getNationalityDropdown()).parent('div').siblings('div').find(employeeInfoObject.getNationalityDropdownArrow()).click({ force: true })
        return this;
    }

    SelectNationality(expectedNationality) {
        cy.get(employeeInfoObject.getNationalityList()).contains(expectedNationality).click({ force: true })
        return this;
    }

    clickPersonalInfoSaveButton() {
        cy.get(employeeInfoObject.getPersonalDetailsSection()).parent('div').find(commonPageObject.getSubmitButton()).click({force:true})
        const reusableMethods = new ReusableMethods();
        return reusableMethods;
    }

    clickCustomInfoSaveButton() {
        cy.get(employeeInfoObject.getCustomDetailsSection()).parent('div').find(commonPageObject.getSubmitButton()).click({force:true})
        const reusableMethods = new ReusableMethods();
        return reusableMethods;
    }
}

export default EmployeeInfoPage;