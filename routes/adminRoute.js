const router = require("express").Router();
const adminController = require("../controllers/admin.controller");

// @route: /api/account/
router.post("/signin", adminController.signIn);
router.post("/get", adminController.getData)

module.exports = router;