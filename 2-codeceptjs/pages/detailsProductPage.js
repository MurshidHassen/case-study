import nav from './Nav';
const I = actor();

export default detailsProductPage = {
    addToCartButton: 'input[id="add-to-cart-button"]',

    async addToCart() {
        I.click(this.addToCartButton);
        I.wait(2);
        I.pressKey('Escape');
        let cartCount = await I.grabTextFrom(nav.cartCount); 
        return cartCount === '1';
    }
}
