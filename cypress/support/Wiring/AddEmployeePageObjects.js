const firstNameInputField = "input[name='firstName'"
const lastNameInputField = "input[name='lastName'"
const loginDetailsToggleButton = "input[type='checkbox']"
const username = "label:contains('Username')"
const password = "label:contains('Password'):not(:contains('Confirm'))"
const confirmPassword = "label:contains('Confirm Password')"
const employeeID = "label:contains('Employee Id')"
const saveButton = "button[type='submit']:contains('Save')"
class AddEmployeePageObjects {

    getFirstNameInputField() {

        return firstNameInputField;
    }
    getLastNameInputField() {

        return lastNameInputField;
    }
    getLoginDetailsToggleButton() {

        return loginDetailsToggleButton;
    }
    getUserName() {

        return username;
    }

    getPassword() {
        return password;
    }

    getConfirmPassword() {
        return confirmPassword;
    }
    getSaveButton(){
        return saveButton;
    }

    getEmployeeId(){
        return employeeID;
    }


}

export default AddEmployeePageObjects;