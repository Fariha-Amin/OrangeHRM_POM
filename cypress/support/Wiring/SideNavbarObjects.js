const sideNavbar = '.oxd-main-menu'
/**
 * A class representing the page object for the side navigation bar.
 * This class provides methods to retrieve selectors for elements related to the side navigation bar
 * in the application.
 */
class SideNavbarObjects {

    /**
     * Gets the selector for the side navigation bar.
     * This selector is used to identify and interact with the side navigation menu of the application.
     * @returns {string} The selector string for the side navigation bar.
     */
    getSideNavbar() {
        return sideNavbar;
    }
}

export default SideNavbarObjects;
