const express = require("express");
const router = express.Router();
const index_controller = require('../controllers/index_controller')

/* GET home page. */
// router.get("/:records", index_controller.makeFaker);

router.get('/', index_controller.homePage);

module.exports = router;