const { faker } = require('@faker-js/faker');
import CommonPageObjects from '../Wiring/CommonPageObjects';

const commonPageObject = new CommonPageObjects();

/**
 * Provides reusable methods for various common tasks.
 */
class ReusableMethods {

    /**
     * Generates a random password with a mix of uppercase, lowercase, numbers, and symbols.
     * @returns {string} - The generated password.
     */
    generatePassword() {
        const upperCase = faker.internet.password(3, false, /[A-Z]/);
        const lowerCase = faker.internet.password(3, false, /[a-z]/);
        const numbers = faker.internet.password(3, false, /[0-9]/);
        const symbols = faker.internet.password(1, false, /[\W_]/);
        let password = upperCase + lowerCase + numbers + symbols;
        return password;
    }

    /**
     * Verifies that the expected header text is visible on the page.
     * @param {string} expectedText - The text that should be visible in the header.
     * @returns {ReusableMethods} - The instance of this class for chaining.
     */
    VerifyExpectedHeaderIsVisible(expectedText) {
        cy.waitTillElementIsVisible('h6');
        cy.get('h6').should("contain.text", expectedText);
        return this;
    }

    /**
     * Verifies that a toast message contains the expected text.
     * @param {string} expectedToastMessage - The expected text to be contained in the toast message.
     * @returns {ReusableMethods} - The instance of this class for chaining.
     */
    verifyToastMessage(expectedToastMessage) {
        cy.waitTillElementIsVisible(commonPageObject.getToastMessage());
        cy.get(commonPageObject.getToastMessage()).should("contain.text", expectedToastMessage);
        return this;
    }
}

export default ReusableMethods;
