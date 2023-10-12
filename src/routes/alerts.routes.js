import {Router} from 'express'
import * as alertsController from "../controllers/alerts.controller.js"

const router = Router()

//cumpleaños
router.get('/getBirthdayDates', alertsController.getBirthdayDates);

//vencimiento certificados
router.get('/getVencimientoCertif', alertsController.getVencimientoCertif);

//turnos
router.get('/getAllTurnos', alertsController.getTurnos);
router.get('/getTurnosMedicos', alertsController.getTurnosMedicos);
router.get('/getTurnosJudiciales', alertsController.getTurnosJudiciales);

export default router