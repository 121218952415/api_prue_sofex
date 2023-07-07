const Router = require("express");
const router = Router();
const createemploye = require("./createemploye");
const weeks_worked  = require("./weeks_worked");
const payhours = require("./payhours")
const checkin = require("./check-in")
const checkout = require("./check-out")
const logicaldeletion = require("./logicaldeletion");
const editemploye = require("./editemploye");
router.use("/employee",createemploye)// registro de  empleados 
router.use("/weeks_worked",weeks_worked)//registro de inico de semana 
router.use("/payhours",payhours)//registro de pagos de horas 
router.use("/check-in",checkin)//registro de entrada  
router.use("/check-out",checkout)//registro  de salida 
router.use("/logicaldelete",logicaldeletion)// borrado logico o inactividad
router.use("/editemployee",editemploye) // modificamos informacion de empleado 
module.exports = router;