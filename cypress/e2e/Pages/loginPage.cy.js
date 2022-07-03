/// <reference types ="cypress"/>

class LoginPage {
  enterUrl() {
    cy.visit("http://automationpractice.com/");
  }
  enterUserNamePassword(username, password) {
    cy.contains("Sign in").click();
    cy.get("#email").clear();
    cy.get("#email").type(username);
    cy.get("#passwd").clear();
    cy.get("#passwd").type(password);
    return this;
  }
  clickOnSignInButton() {
    return cy.get("#SubmitLogin").click();
  }
  verifyPageTitle() {
    return cy.title().should("eq", "My account - My Store");
  }
  logoutFromApplication() {
    return cy.get('[title="Log me out"]').click();
  }
}

const login = new LoginPage();
export default login;
