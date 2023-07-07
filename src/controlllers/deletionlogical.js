const Employee = require("../schemas/Employee");
const deleteLogical = async (req, res) => {
  try {
    const id = decodeURIComponent(req.params.id);
    const employee = await Employee.query().findById(id);
    console.log(employee);
    if (employee.borrado === false) {
      await Employee.query().findById(id).patch({ borrado: true });
      res.send({ message: "User is already deleted" });
    }
    if (employee.borrado === true) {
      await Employee.query().findById(id).patch({ borrado: false });
      res.send({ message: "User is active" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  deleteLogical,
};
