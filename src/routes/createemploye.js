const Router = require("express");
const { employecreate } = require("../controlllers/employeerecord");
const router = Router();
//creamos usuario
router.post("/", async (req, res) => {
  try {
    const { name, lastName, cargo } = req.body;
    console.log(name, lastName, cargo,"ndvh")
    const employe = await employecreate(name, lastName, cargo);
    return res.status(200).json(employe);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err.message);
  }
});

module.exports = router;
