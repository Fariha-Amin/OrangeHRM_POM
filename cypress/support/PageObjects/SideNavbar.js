import SideNavbarObjects from "../Wiring/SideNavbarObjects";
import ReusableMethods from "./ReusableMethods";

const sideNavbarObject = new SideNavbarObjects();

/**
 * Handles interactions with the side navigation bar.
 */
class SideNavbar {

    /**
     * Clicks on a module tab in the side navigation bar.
     * @param {string} module - The name of the module tab to click on.
     * @returns {ReusableMethods} - An instance of the `ReusableMethods` class.
     */
    clickOnModuleTab(module) {
        cy.get(sideNavbarObject.getSideNavbar())
            .find('span').contains(module).click({ force: true });
        const reusable = new ReusableMethods();
        return reusable;
    }

}

export default SideNavbar;
