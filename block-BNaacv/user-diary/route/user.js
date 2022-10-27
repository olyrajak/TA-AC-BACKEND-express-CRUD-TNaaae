const express = require("express");

const router = express.Router();

router.get('/new', (req, res) => {
    res.render("userForm");
});
router.post('/', (req, res) => {
    res.send(req.body);
});
router.get('/', (req, res) => {
    res.render("users");
});
router.get("/users", (req, res) => {
    res.render("users");
});

router.get("/:id", (req, res) => {

    res.render("singleUser");
});
router.get("/:id/edit", (req, res) => {});

router.put("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});
module.exports = router;