const fetch = require("../fetch");
const { options } = require("../config.json");

module.exports = async (req, res) => {
    let query = await fetch(`https://e621.net/posts.json?tags=${options[req.query.number].tags.replace(/ /g, "%20")}&limit=10&page=${req.query.page}`).then(res => res.json());
    res.render("search", { query, page: req.query.page, option: options[req.query.number], number: req.query.number });
};