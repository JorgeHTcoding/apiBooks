const {Router} = require ("express")
const router = Router();
const librosCtrl = require("../controller/libros.controller")



router.get("/libros",librosCtrl.getLibros)

router.post("/libros",librosCtrl.postLibros)

router.put("/libros",librosCtrl.putLibros)

router.delete("/libros",librosCtrl.deleteLibros)

module.exports = router;

