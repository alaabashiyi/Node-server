const data = require('../data/products.json');

const search = (keyword) => {
    return data.items.filter(item => (item.keywords.toLowerCase() || item.name.toLowerCase()).includes(keyword.toLowerCase().trim()));
}

const products = data.items;
const maxProducts = data.items.length;
const LIMIT = 10;
const pages = Math.ceil(maxProducts / LIMIT);

module.exports = { search, maxProducts, LIMIT, products, pages };