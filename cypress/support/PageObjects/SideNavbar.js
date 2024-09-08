import SideNavbarObjects from "../Wiring/SideNavbarObjects";
import ReusableMethods from "./ReusableMethods";
const sideNavbarObject = new SideNavbarObjects();
class SideNavbar {

    clickOnModuleTab(module) {
        cy.get(sideNavbarObject.getSideNavbar()).find('span').contains(module).click({force:true});
        const reusable = new ReusableMethods();
        return reusable;
       
    }

}

export default SideNavbar;