const addButton = "button[type='button']:contains('Add')";
const employeeIDField = "label:contains('Employee Id')";
const employeeSearchButton = "button[type='submit']:contains('Search')"
const employeeTable = '.orangehrm-employee-list'
class PIMPageObjects {

    getAddEmployeeButton() {
        return addButton;
    }
    getEmployeeIDField(){
        return employeeIDField;
    }
    getEmployeeSearchButton(){
        return employeeSearchButton;
    }
    getEmployeeTable(){
        return employeeTable;
    }

}

export default PIMPageObjects;