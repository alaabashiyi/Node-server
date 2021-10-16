const { search, maxProducts, LIMIT, products, pages } = require('../utils/helper');

const getItems = (req, res, next) => {
    const { keyword = '', page = 1 } = req.query;
    try {
        let data;
        if (keyword !== '') {
            data = search(keyword).slice(0, LIMIT);
            const pages = Math.ceil(data.length / LIMIT)
            return res.json({ data, results: data.length, pages });
        }

        data = products.slice((page - 1) * LIMIT, page * LIMIT);

        return res.json({ data, results: data.length, maxProducts, page: +page, pages });
    } catch (e) {
        next(e);
    }
}

module.exports = getItems;