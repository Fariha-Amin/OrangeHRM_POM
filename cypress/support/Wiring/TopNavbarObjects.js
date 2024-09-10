const userDropdown = '.oxd-userdropdown'
const logoutOption = "a[role='menuitem']:contains('Logout')"
const userNameText = ".oxd-userdropdown-tab p[class='oxd-userdropdown-name']"
/**
 * A class representing the page object for the top navigation bar.
 * This class provides methods to retrieve selectors for elements related to the top navigation bar,
 * including user-related dropdowns and logout options.
 */
class TopNavbarObjects {

    /**
     * Gets the selector for the user dropdown menu.
     * This selector is used to identify and interact with the dropdown menu that appears when the user 
     * icon or profile area is clicked in the top navigation bar.
     * @returns {string} The selector string for the user dropdown menu.
     */
    getUserDropdown() {
        return userDropdown;
    }

    /**
     * Gets the selector for the logout option within the user dropdown.
     * This selector is used to identify and interact with the logout option available in the user dropdown menu.
     * @returns {string} The selector string for the logout option.
     */
    getLogoutOption() {
        return logoutOption;
    }

    /**
     * Gets the selector for the user name text displayed in the user dropdown.
     * This selector is used to identify and retrieve the text element that displays the user's name within 
     * the user dropdown menu.
     * @returns {string} The selector string for the user name text.
     */
    getUserNameText() {
        return userNameText;
    }
}

export default TopNavbarObjects;
