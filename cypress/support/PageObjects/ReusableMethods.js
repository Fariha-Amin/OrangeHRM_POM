const { faker } = require('@faker-js/faker');
import CommonPageObjects from '../Wiring/CommonPageObjects';
const commonPageObject = new CommonPageObjects();
class ReusableMethods{

    generatePassword() {
        const upperCase = faker.internet.password(3, false, /[A-Z]/);
        const lowerCase = faker.internet.password(3, false, /[a-z]/);
        const numbers = faker.internet.password(3, false, /[0-9]/);
        const symbols = faker.internet.password(1, false, /[\W_]/);
        let password = upperCase + lowerCase + numbers + symbols;
        return password;
      }
      VerifyExpectedHeaderIsVisible(expectedText){
        cy.waitTillElementIsVisible('h6')
        cy.get('h6').should("contain.text", expectedText);
        return this;
      }

      verifyToastMessage(expectedToastMessage){

          cy.waitTillElementIsVisible(commonPageObject.getToastMessage())
           cy.get(commonPageObject.getToastMessage()).should("contain.text", expectedToastMessage);
           return this;
      }
}

export default ReusableMethods;