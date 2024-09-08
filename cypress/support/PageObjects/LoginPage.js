import LoginPageObjects from "../Wiring/LoginpageObjects"
import DashboardPage from "./DashboardPage"

const loginPageObject = new LoginPageObjects()
class LoginPage{
    typeUsername(username){
        cy.get(loginPageObject.getUsername()).type(username)
        return this
    }
    typePassword(password){
        cy.get(loginPageObject.getPassword()).type(password)
        return this
    }
    clickLoginButton(){
        cy.get(loginPageObject.getSubmitButton()).click()
        let dashboard = new DashboardPage()
        return dashboard
    }

}
export default LoginPage