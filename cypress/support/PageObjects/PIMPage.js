import PIMPageObjects from "../Wiring/PIMPageObjects";
import AddEmployeePage from "./AddEmployeePage";
const pimPageObject = new PIMPageObjects();
class PIMPage {

    clickAddEmployeeButton() {
        cy.get(pimPageObject.getAddEmployeeButton()).click();
        let addEmployeePage = new AddEmployeePage()
        return addEmployeePage
    }

    enterEmployeeID(employeeID){
        cy.get(pimPageObject.getEmployeeIDField()).parent().siblings('div').find('input').type(employeeID)
        return this
    }
    clickSearchEmployeeButton(){
        cy.get(pimPageObject.getEmployeeSearchButton()).click({force:true})
        return this
    }
    verifyEmployeeDataIsVisible(employeeID){
        cy.get(pimPageObject.getEmployeeTable()).find("div[role='cell']").contains(employeeID).should('be.visible')
        return this
    }


}

export default PIMPage;