const express = require("express");
const matchController = require("../controllers/matchController");
const router = express.Router();

//Api users
router.get("/index", matchController.index);
router.get("/get", matchController.getone);
// router.post("/register", matchController.register);
// router.post("/login", matchController.login);
router.post("/store", matchController.store);
router.post("/delete", matchController.delete);
router.post("/update", matchController.update);

module.exports = router;
