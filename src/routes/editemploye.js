const Router = require("express");
const { editemploye } = require("../controlllers/employeedit");
const router = Router();
//creamos usuario
router.patch("/:id",editemploye);
// aqui podemos colocar ya sea un  middlawarte de jwt o de eexpres 
//sesion 
module.exports = router;