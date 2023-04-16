const router = require("express").Router();
const accountController = require("../controllers/account.controller");

// @route: /api/account/
router.post("/signup", accountController.signUp);
router.post("/signin", accountController.signIn);

module.exports = router;