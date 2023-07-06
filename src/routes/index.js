const Router = require("express");
const router = Router();
const createemploye = require("./createemploye")

router.use("/createmeploye",createemploye)

module.exports = router;