import LoginPageObjects from "../Wiring/LoginpageObjects";
import DashboardPage from "./DashboardPage";

const loginPageObject = new LoginPageObjects();

/**
 * Handles interactions with the Login page.
 */
class LoginPage {

    /**
     * Enters the username into the username field.
     * @param {string} username - The username to enter.
     * @returns {LoginPage} - The instance of this class for chaining.
     */
    typeUsername(username) {
        cy.get(loginPageObject.getUsername()).type(username);
        return this;
    }

    /**
     * Enters the password into the password field.
     * @param {string} password - The password to enter.
     * @returns {LoginPage} - The instance of this class for chaining.
     */
    typePassword(password) {
        cy.get(loginPageObject.getPassword()).type(password);
        return this;
    }

    /**
     * Clicks the login button to submit the login form.
     * @returns {DashboardPage} - An instance of the `DashboardPage` class.
     */
    clickLoginButton() {
        cy.get(loginPageObject.getSubmitButton()).click();
        const dashboard = new DashboardPage();
        return dashboard;
    }

}

export default LoginPage;
