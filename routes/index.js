var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini messageboard", message: messages });
});

  /*  POST   */
  
  router.post("/new", function (req, res, next) {
    const message = req.body.message;
    const author = req.body.author;
    messages.push({ text: message, user: author, added: new Date() });
    res.redirect("/")
  });

module.exports = router;
