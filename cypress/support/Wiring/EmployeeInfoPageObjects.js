const nationalityDropdown = "label:contains('Nationality')"
const nationalityDropdownArrow = ".oxd-select-text--arrow"
const nationalityList = "div[role='listbox']"
const personalDetailsSection ="h6:contains('Personal Details')"
const customDetailsSection ="h6:contains('Custom Fields')"
class EmployeeInfoPageObjects {

    getNationalityDropdown() {
        return nationalityDropdown;
    }
    getNationalityDropdownArrow() {
        return nationalityDropdownArrow;
    }
    getNationalityList(){
        return nationalityList;
    }
    getPersonalDetailsSection(){
        return personalDetailsSection;
    }
    getCustomDetailsSection(){
        return customDetailsSection;
    }

}

export default EmployeeInfoPageObjects;