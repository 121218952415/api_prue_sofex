const Router = require("express");
const router = Router();
//creamos usuario
router.post("/", async (req, res) => {
  try {
    const { } = req.body;
    const echeckinyout = await checkincheckout();
    return res.status(200).json(employe);
  } catch (err) {
    console.log(err);
    return res.status(404).send(err.message);
  }
});

module.exports = router;