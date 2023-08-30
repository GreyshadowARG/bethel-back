import {Router} from 'express'
import * as pasivaController from "../controllers/persona/pasiva.controller.js"

const router = Router()

//pasividad
router.post('/pasarPasividad', pasivaController.pasarPasividad);
router.get('/getPoblacionPasiva', pasivaController.getPoblacionPasiva);
router.delete('/deletePasivaById/:pasivaId', pasivaController.deletePasivaById);

export default router