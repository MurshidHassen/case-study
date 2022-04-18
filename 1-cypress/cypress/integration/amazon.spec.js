/// <reference types="cypress" />

// Welcome to Cypress!
//
// the power of writing tests in Cypress.
describe("Test Automation Amazon", () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
  });

  it("User navigated to the landing page of Amazon", () => {
    cy.visit("https://amazon.com");
  });

  // it means integration tests
  it("Search a product", () => {
    // GET an ELEMENT USING HTML Element
    // We use the `cy.get()` command to get all elements that match the selector.
    cy.get('input[id="twotabsearchtextbox"]')
      .type("MacBook pro")
      .type("{enter}");
  });

  it("Select an item from the available item list ", () => {
    // GET an ELEMENT USING CSS SELECTOR
    cy.get(".s-card-container .a-section .sg-col-inner").last().click();
    cy.get(".a-section .aok-relative .s-image-fixed-height").first().click();
  });
  let isItemAdded = true;
  it("Add the item to the cart", () => {
    cy.intercept("POST", "**/cart/carts/retail/items?*").as("addProduct");
    cy.intercept("GET", "**/ajax/dynamic-menu.html?cartItems**").as("addCart");
    cy.contains(" Add to Cart ").click({ force: true });
    cy.get('span[id="mbc-buybutton-addtocart-1-announce"]').click({
      force: true,
    });
    cy.wait(5000);
    isItemAdded = cy.contains(" Not added ").then(() => false);
  });
  it("Verify the selected item is available in the cart", () => {
    cy.get('div[id="nav-cart-count-container"]').click();
    if(isItemAdded){
      cy.should("not.exist", " Your Amazon Cart is empty ");
    }else{
      // then assumed to be failed
      cy.should("not.exist", " Your Amazon Cart is empty ");
      throw new Error("test failed here");
    }
  });
});
