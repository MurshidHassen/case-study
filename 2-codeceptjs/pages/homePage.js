const I = actor();

module.exports = {
    
    searchTextbox: '#twotabsearchtextbox',
    searchButton: 'input[type="submit"]',
  
    async search(searchString = 'amazon echo') {
        I.fillField(this.searchTextbox, searchString);
        I.click(this.searchButton);
    },
  };
