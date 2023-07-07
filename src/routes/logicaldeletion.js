const Router = require("express");
const { deleteLogical } = require("../controlllers/deletionlogical");
const router = Router();
// borrado logico no de borra
// de base de datos solo se inactiva 
router.delete("/:id", deleteLogical)
// aqui podemos colocar ya sea un  middlawarte de jwt o de eexpres 
//sesion 


module.exports = router;