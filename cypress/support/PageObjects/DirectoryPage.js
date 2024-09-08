import DirectoryPageObjects from "../Wiring/DirectoryPageObjects";
import CommonPageObjects from "../Wiring/CommonPageObjects";
const directoryPageObject = new DirectoryPageObjects();
const commonPageObject = new CommonPageObjects();
class DirectoryPage{

    enterEmployeeName(firstName){
        cy.get(directoryPageObject.getEmployeeNameField()).parent().siblings('div').find('input').type(firstName)
        return this
    }

    clickAutoCompleteDropdown(){
        cy.get(directoryPageObject.getAutoCompleteDropdown()).click({force:true})
        return this
    }
    clickSearchButton(){
        cy.get(commonPageObject.getSearchButton()).click({force:true})
        return this
    }
    verifyEmployeeCardHeaderName(fullName){
        cy.get(directoryPageObject.getCardHeader()).invoke('text')
        .then((text) => {
          const normalizedText = text.replace(/\s+/g, ' ').trim();
          expect(normalizedText).to.eq(fullName);
        });
        return this;
    }
}

export default DirectoryPage;