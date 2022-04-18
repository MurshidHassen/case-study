const I = actor();

export default finalPage = {
    resultBar: 'div[id="search"] span[data-component-type="s-result-info-bar"]',
    productName: 'h2',
    noResult: '#noResultsTitle',

    async hasResults(searchString) {
        const results = await I.grabTextFrom(this.productName);
        return results[0].toLowerCase().includes(searchString.toLowerCase());
    },

    async showProductDetails() {
        I.click(this.productName);
        I.wait(2);
    }
}
