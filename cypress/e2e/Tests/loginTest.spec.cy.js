import login from "../Pages/loginPage.cy";

/// <reference types="cypress" />

describe("Test login funcationlity : login into  the application and logout ", () => {
  it("Open URL", () => {
    login.enterUrl();
  });
  it("Login Into Application", () => {
    login.enterUserNamePassword("qatubeupdate@yopmail.com", "12345");
    login.clickOnSignInButton();
  });

  it("Verify Page title", () => {
    login.verifyPageTitle();
  });

  it("Logout From Application", () => {
    login.logoutFromApplication();
  });
});
