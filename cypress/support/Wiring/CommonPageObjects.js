const toastMessage = '.oxd-text--toast-message'
const submitButton = "button[type='submit']"
class CommonPageObjects {

    getToastMessage() {
        return toastMessage;
    }

    getSubmitButton() {
        return submitButton;
    }
}

export default CommonPageObjects;