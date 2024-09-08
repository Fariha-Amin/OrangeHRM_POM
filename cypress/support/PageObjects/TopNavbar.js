import TopNavbarObjects from "../Wiring/TopNavbarObjects";
const topNavbarObject = new TopNavbarObjects()
class TopNavbar{

    expandUserDropdown(){
        cy.get(topNavbarObject.getUserDropdown()).click({force:true})
        return this;
    }
    clickLogoutOption(){
        cy.get(topNavbarObject.getLogoutOption()).click({force:true})
        return this;
    }
    matchUserNameText(fullName){
        cy.get(topNavbarObject.getUserNameText()).should('contain.text', fullName)
        return this;
    }

}

export default TopNavbar;