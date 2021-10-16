const { search, maxProducts, LIMIT, products, pages } = require('../utils/helper');

const getItems = (req, res, next) => {
    const { keyword = '', page = 1 } = req.query;
    let data;
    if (keyword !== '') {
        data = search(keyword).slice(0, LIMIT);
        const pages = Math.ceil(data.length / LIMIT)
        return res.json({ data, results: data.length, pages });
    }

    data = products.slice((page - 1) * LIMIT, page * LIMIT);

    return res.json({ data, results: data.length, maxProducts, page: +page, pages });
}

module.exports = getItems;