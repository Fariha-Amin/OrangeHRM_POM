const userDropdown = '.oxd-userdropdown'
const logoutOption = "a[role='menuitem']:contains('Logout')"
const userNameText = ".oxd-userdropdown-tab p[class='oxd-userdropdown-name']"
class TopNavbarObjects {

    getUserDropdown() {
        return userDropdown;
    }
    getLogoutOption() {
        return logoutOption;
    }
    getUserNameText() {
        return userNameText;
    }

}

export default TopNavbarObjects;