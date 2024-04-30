
describe("loginSaucedemo", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.loginSaucedemo();
  });

  it("should add an Sauce Labs Onesie to the cart", () => {
    cy.get("#item_2_title_link > .inventory_item_name").click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get(".back-image").click();
  });

  it("should add an Sauce Labs Backpack to the cart", () => {
    cy.get("#item_4_title_link > .inventory_item_name").click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".back-image").click();
  });
});
