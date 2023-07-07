const Router = require("express");
const { checkout } = require("../controlllers/check-out");
const router = Router();
//creamos usuario
router.post("/",  checkout);

module.exports = router;