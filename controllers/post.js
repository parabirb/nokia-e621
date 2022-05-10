const fetch = require("../fetch");

module.exports = async (req, res) => {
    let post = (await fetch(`https://e621.net/posts.json?tags=id:${req.query.id}&limit=1`).then(res => res.json())).posts[0];
    res.render("post", { post });
};