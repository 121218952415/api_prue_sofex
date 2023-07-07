const Router = require("express");
const { weeksworked } = require("../controlllers/workedweek");
const router = Router();


router.post("/", async (req, res) => {
    try {
      const {employeeId } = req.body;
     
      const weeks_worked = await weeksworked(employeeId);
      return res.status(200).json(weeks_worked);
    } catch (err) {
      console.log(err);
      return res.status(404).send(err.message);
    }
  });

module.exports = router;