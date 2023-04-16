const router = require("express").Router();
const detailController = require("../controllers/detail.controller");
// @route: /api/detail/
router.post("/get", detailController.getDetail);
router.post("/update", detailController.updateDetail);

module.exports = router;