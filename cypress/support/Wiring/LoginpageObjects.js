const username = "input[name='username']"
const password = "input[name='password']"
const submitButton = "[type='submit']"
/**
 * A class representing the page object for the login page.
 * This class provides methods to retrieve selectors for elements on the login page, 
 * including fields for username and password, as well as the submit button.
 */
class LoginPageObjects {

    /**
     * Gets the selector for the username input field.
     * This selector is used to identify and interact with the field where users enter their username.
     * @returns {string} The selector string for the username input field.
     */
    getUsername() {
        return username;
    }

    /**
     * Gets the selector for the password input field.
     * This selector is used to identify and interact with the field where users enter their password.
     * @returns {string} The selector string for the password input field.
     */
    getPassword() {
        return password;
    }

    /**
     * Gets the selector for the submit button.
     * This selector is used to identify and interact with the button that submits the login form.
     * @returns {string} The selector string for the submit button.
     */
    getSubmitButton() {
        return submitButton;
    }
}

export default LoginPageObjects;
