const Router = require("express");
const { checkin } = require("../controlllers/check-in");
const router = Router();
//creamos usuario
router.post("/",  checkin);

module.exports = router;