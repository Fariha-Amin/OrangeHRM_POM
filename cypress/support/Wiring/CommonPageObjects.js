const toastMessage = '.oxd-text--toast-message'
const submitButton = 'button[type="submit"]'
const searchButton = "button[type='submit']:contains('Search')"
class CommonPageObjects {

    getToastMessage() {
        return toastMessage;
    }

    getSubmitButton() {
        return submitButton;
    }
    getSearchButton() {
        return searchButton;
    }
}

export default CommonPageObjects;