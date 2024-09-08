const nationalityDropdown = "label:contains('Nationality')"
const bloodGroupDropdown = "label:contains('Blood Type')"
const DropdownArrow = ".oxd-select-text--arrow"
const DropdownList = "div[role='listbox']"
const personalDetailsSection ="h6:contains('Personal Details')"
const customDetailsSection ="h6:contains('Custom Fields')"
const femaleGenderRadioButton = "label:contains('Female')"
class EmployeeInfoPageObjects {

    getNationalityDropdown() {
        return nationalityDropdown;
    }
    getBloodGroupDropdown(){
        return bloodGroupDropdown;
    }
    getDropdownArrow() {
        return DropdownArrow;
    }
    getDropdownList(){
        return DropdownList;
    }
    getPersonalDetailsSection(){
        return personalDetailsSection;
    }
    getCustomDetailsSection(){
        return customDetailsSection;
    }
    getFemaleGenderRadioButton(){
        return femaleGenderRadioButton;
    }

}

export default EmployeeInfoPageObjects;