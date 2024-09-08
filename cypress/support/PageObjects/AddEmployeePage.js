import AddEmployeePageObjects from "../Wiring/AddEmployeePageObjects";
const addEmployeePageObject = new AddEmployeePageObjects()
import ReusableMethods from "./ReusableMethods";
class AddEmployeePage {

    enterFirstName(firstName) {
        cy.get(addEmployeePageObject.getFirstNameInputField()).type(firstName)
        return this
    }
    enterLastName(lastName) {
        cy.get(addEmployeePageObject.getLastNameInputField()).type(lastName)
        return this
    }
    clickLoginDetailsToggleButton() {
        cy.get(addEmployeePageObject.getLoginDetailsToggleButton()).click({ force: true })
        return this
    }
    enterUserName(userName) {

        cy.get(addEmployeePageObject.getUserName()).parent().siblings('div').find('input').type(userName)
        return this
    }
    enterPassword(password) {
        cy.get(addEmployeePageObject.getPassword()).parent().siblings('div').find('input').type(password)
        return this
    }
    enterConfirmPassword(confirmedPassword) {
        cy.get(addEmployeePageObject.getConfirmPassword()).parent().siblings('div').find('input').type(confirmedPassword)
        return this
    }
    saveEmployeeInfo(employeeDataFile,username,password) {
        cy.get(addEmployeePageObject.getEmployeeId()).parent().siblings('div').find('input').invoke('val').then(employeeId => {
            cy.writeFile(`cypress/fixtures/${employeeDataFile}`, {
                username,
                password,
                employeeId
            });

        })
        return this
    }
    clickSaveButton() {
        cy.get(addEmployeePageObject.getSaveButton()).click({ force: true })
        const reusableMethods = new ReusableMethods();
        return reusableMethods;

    }


}

export default AddEmployeePage;