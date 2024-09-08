import SideNavbarObjects from "../Wiring/SideNavbarObjects";
const sideNavbarObject = new SideNavbarObjects();
class SideNavbar {

    clickOnModuleTab(module) {
        return cy.get(sideNavbarObject.getSideNavbar()).find('span').contains(module).click()
        return this
    }

}

export default SideNavbar;