import shopProduct from './ShopProduct.js';
import cdProduct from './CDProduct.js';
function bookProduct(title, numPages, price) {
	this.numPages = numPages;
	shopProduct.call(this, title, price);
}
bookProduct.prototype = Object.create(cdProduct.prototype);
bookProduct.prototype.constructor = cdProduct.prototype;
bookProduct.prototype.getNumPages = function () {
	console.log('Number of pages: ' + this.numPages);
}
export default bookProduct;