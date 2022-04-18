import {expect} from 'chai';
const { I, homePage, finalPage } = inject();

Feature('Search functionality');

Before(() => {
    I.amOnPage('/');
});

Scenario('Search function is displayed', () => {
    I.seeElement(homePage.searchTextbox);
    I.seeElement(homePage.searchButton);
});

Scenario('Search returns results', async () => {
    const searchString = 'macbook pro';
    homePage.search(searchString);
    I.seeElement(finalPage.resultBar);
    expect(await finalPage.hasResults(searchString)).to.be.true;
});
