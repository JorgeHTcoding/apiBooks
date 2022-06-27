const {Router} = require ("express")
const router = Router();
const usuarioCtrl = require("../controller/usuario.controller")


router.post("/registro", usuarioCtrl.postUsuario);

router.post("/login", usuarioCtrl.getUsuario);


module.exports = router;