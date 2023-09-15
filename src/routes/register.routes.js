import {Router} from 'express'
import * as registerController from "../controllers/register.controller.js"

const router = Router()

// registro de usuario
router.post('/newUser', registerController.newUser);
router.get('/getAllUsers', registerController.getAllUsers);
router.delete('/deleteUser/:id', registerController.deleteUser);

export default router