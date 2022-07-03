/// <reference types ="cypress"/>

class HomePage {
  searchItem(element) {
    cy.contains(element.HomePageLinks).should("be.visible");
    return this;
  }
}
const homepage = new HomePage();
export default homepage;
