const toastMessage = '.oxd-text--toast-message'
const submitButton = 'button[type="submit"]'
const searchButton = "button[type='submit']:contains('Search')"
/**
 * A class representing common page elements across the application.
 * This class provides methods to retrieve selectors for frequently used elements that might 
 * be found on multiple pages, such as toast messages and buttons.
 */
class CommonPageObjects {

    /**
     * Gets the selector for the toast message element.
     * This selector is used to identify and interact with toast messages displayed on the page.
     *
     * @returns {string} The selector string for the toast message element.
     */
    getToastMessage() {
        return toastMessage;
    }

    /**
     * Gets the selector for the submit button.
     * This selector is used to identify and interact with submit buttons on forms.
     *
     * @returns {string} The selector string for the submit button.
     */
    getSubmitButton() {
        return submitButton;
    }

    /**
     * Gets the selector for the search button.
     * This selector is used to identify and interact with search buttons on the page.
     * @returns {string} The selector string for the search button.
     */
    getSearchButton() {
        return searchButton;
    }
}

export default CommonPageObjects;
