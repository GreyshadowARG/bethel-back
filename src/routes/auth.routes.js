import {Router} from 'express'
import * as authController from "../controllers/auth.controller.js"

const router = Router()

// registro de usuario
router.post('/login', authController.handleLogin);
router.get('/logout', authController.handleLogout);

export default router