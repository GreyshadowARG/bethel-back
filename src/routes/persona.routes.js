import {Router} from 'express'
import * as personaController from "../controllers/persona/persona.controller.js"
import * as editsController from "../controllers/persona/edits.controller.js"
import * as documentacionController from "../controllers/persona/documentacion.controller.js"
import * as movimientoController from "../controllers/persona/movimiento.controller.js"
import * as tratamientoController from "../controllers/persona/tratamiento.controller.js"
import * as actividadController from "../controllers/persona/actividad.controller.js"
import * as turnoController from "../controllers/persona/turno.controller.js"
import * as pasivaController from "../controllers/persona/pasiva.controller.js"

const router = Router()

//personas
router.post('/newPersona', personaController.newPersona);
router.get('/getAllPersonas', personaController.getAllPersonas);
router.get('/getPersonaById/:id', personaController.getPersonaById);
router.delete('/deletePersonaById/:id', personaController.deletePersonaById);
router.get('/getPersonaByLastName/:apellido', personaController.getPersonaByLastName);

//edits
router.post('/editDatosPersonales/:id', editsController.editDatosPersonales);
router.post('/editObraSocial/:id', editsController.editObraSocial);
router.post('/editIngreso/:id', editsController.editIngreso);
router.post('/editEscolaridad/:id', editsController.editEscolaridad);
router.post('/editDiscapacidad/:id', editsController.editDiscapacidad);
router.post('/editFamiliares/:id', editsController.editFamiliares);

//documentacion
router.post('/newDocumentacion/', documentacionController.newDocumentacion);

//movimientos
router.post('/newMovimiento/:id', movimientoController.newMovimiento);
router.get('/getAllMovimientos/:id', movimientoController.getAllMovimientos);
router.delete('/eliminarMovimiento/:idPersona/:idMovimiento', movimientoController.eliminarMovimiento);

//tratamientos
router.post('/newTratamiento/:id', tratamientoController.newTratamiento);
router.get('/getAllTratamientos/:id', tratamientoController.getAllTratamientos);
router.delete('/eliminarTratamiento/:idPersona/:idTratamiento', tratamientoController.eliminarTratamiento);

//actividades
router.post('/newActividad/:id', actividadController.newActividad);
router.get('/getAllActividades/:id', actividadController.getAllActividades);
router.delete('/eliminarActividad/:idPersona/:idActividad', actividadController.eliminarActividad);

//turnos
router.get('/getAllTurnos/:id', turnoController.getAllTurnos);
router.delete('/eliminarTurno/:idPersona/:idTurno', turnoController.eliminarTurno);

export default router