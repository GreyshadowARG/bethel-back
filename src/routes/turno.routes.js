import {Router} from 'express'
import * as turnoController from "../controllers/persona/turno.controller.js"

const router = Router()

//personas
router.post('/newTurno', turnoController.newTurno);
router.get('/getAllTurnos', turnoController.getAllTurnos);
router.get('/getTurnosByPersona/:userId', turnoController.getTurnosByPersona);
router.delete('/eliminarTurno/:idTurno', turnoController.eliminarTurno);

export default router