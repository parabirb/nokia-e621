const fetch = require("node-fetch");

module.exports = (url, args = {}) => {
    args.headers = args.headers || {}
    args.headers["user-agent"] = "NokiaE621/1.0"
    return fetch(url, args);
};