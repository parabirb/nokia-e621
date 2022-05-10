const { options } = require("../config.json");

module.exports = (req, res) => {
    res.render("index", { options });
};