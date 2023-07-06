const Router = require("express");
const { employecreate } = require("../controlllers/employeerecord");
const router = Router();
router.get("/", employecreate);
module.exports = router;