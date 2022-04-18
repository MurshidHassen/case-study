import { expect } from 'chai';
const { I, homePage, finalPage, detailsProductPage, cartPage } = inject();

Feature('Add to card functionality');

Before(() => {
    I.amOnPage('/');
});

Scenario('Add a product to shopping cart', async () => {
    const searchString = 'macbook pro';
    homePage.search(searchString);
    finalPage.showProductDetails();
    expect(await detailsProductPage.addToCart()).to.be.true;
    I.seeElement(cartPage.confirmText);
});
