const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

//Api users
router.post("/index", userController.index);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/add", userController.add);
router.post("/delete", userController.delete);

module.exports = router;
