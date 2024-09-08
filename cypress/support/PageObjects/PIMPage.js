import PIMPageObjects from "../Wiring/PIMPageObjects";
import AddEmployeePage from "./AddEmployeePage";
const pimPageObject = new PIMPageObjects();
class PIMPage {

    clickAddEmployeeButton() {
        cy.get(pimPageObject.getAddEmployeeButton()).click();
        let addEmployeePage = new AddEmployeePage()
        return addEmployeePage
    }

}

export default PIMPage;