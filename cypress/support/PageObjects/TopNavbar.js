import TopNavbarObjects from "../Wiring/TopNavbarObjects";

const topNavbarObject = new TopNavbarObjects();

/**
 * Handles interactions with the top navigation bar.
 */
class TopNavbar {

    /**
     * Expands the user dropdown menu.
     * @returns {TopNavbar} - The instance of this class for chaining.
     */
    expandUserDropdown() {
        cy.get(topNavbarObject.getUserDropdown()).click({ force: true });
        return this;
    }

    /**
     * Clicks the logout option in the user dropdown menu.
     * @returns {TopNavbar} - The instance of this class for chaining.
     */
    clickLogoutOption() {
        cy.get(topNavbarObject.getLogoutOption()).click({ force: true });
        return this;
    }

    /**
     * Verifies that the user's name displayed in the top navigation bar matches the expected full name.
     * @param {string} fullName - The expected full name to verify.
     * @returns {TopNavbar} - The instance of this class for chaining.
     */
    matchUserNameText(fullName) {
        cy.get(topNavbarObject.getUserNameText()).should('contain.text', fullName);
        return this;
    }

}

export default TopNavbar;
