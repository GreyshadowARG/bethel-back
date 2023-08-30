import express from 'express'
import cors from 'cors'
import corsOptions from './config/corsOptions.js'
//import { verifyJWT } from './middlewares/verifyJwt.js'
import cookieParser from 'cookie-parser'
import credentials from './middlewares/credentials.js'

import register from './routes/register.routes.js'
import auth from './routes/auth.routes.js'
import refreshRoutes from './routes/refresh.routes.js'
import alerts from './routes/alerts.routes.js'
import persona from './routes/persona.routes.js'
import turnos from './routes/turno.routes.js'
import pasividad from './routes/pasiva.routes.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOptions))


app.use(credentials)
app.use(cookieParser())

// rutas
app.use('/api/register', register)
app.use('/api/auth', auth)
app.use('/api/refresh', refreshRoutes)

//app.use (verifyJWT)
app.use('/api/persona', persona)
app.use('/api/turnos', turnos)
app.use('/api/alerts', alerts)
app.use('/api/pasividad', pasividad)


// middleware
// error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Ups... Algo salió mal"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        massage: errorMessage,
        stack: err.stack,
    })
})

export default app;
