import DirectoryPageObjects from "../Wiring/DirectoryPageObjects";
import CommonPageObjects from "../Wiring/CommonPageObjects";

const directoryPageObject = new DirectoryPageObjects();
const commonPageObject = new CommonPageObjects();

/**
 * Handles interactions with the Directory page.
 */
class DirectoryPage {

    /**
     * Enters the employee's first name into the search field.
     * @param {string} firstName - The first name of the employee to search for.
     * @returns {DirectoryPage} - The instance of this class for chaining.
     */
    enterEmployeeName(firstName) {
        cy.get(directoryPageObject.getEmployeeNameField()).parent().siblings('div').find('input').type(firstName);
        return this;
    }

    /**
     * Clicks the auto-complete dropdown to show suggestions.
     * @returns {DirectoryPage} - The instance of this class for chaining.
     */
    clickAutoCompleteDropdown() {
        cy.get(directoryPageObject.getAutoCompleteDropdown()).click({ force: true });
        return this;
    }

    /**
     * Clicks the search button to initiate the search.
     * @returns {DirectoryPage} - The instance of this class for chaining.
     */
    clickSearchButton() {
        cy.get(commonPageObject.getSearchButton()).click({ force: true });
        return this;
    }

    /**
     * Verifies that the employee card header name matches the expected full name.
     * @param {string} fullName - The expected full name to verify against.
     * @returns {DirectoryPage} - The instance of this class for chaining.
     */
    verifyEmployeeCardHeaderName(fullName) {
        cy.get(directoryPageObject.getCardHeader()).invoke('text')
        .then((text) => {
          const normalizedText = text.replace(/\s+/g, ' ').trim();
          expect(normalizedText).to.eq(fullName);
        });
        return this;
    }
}

export default DirectoryPage;
