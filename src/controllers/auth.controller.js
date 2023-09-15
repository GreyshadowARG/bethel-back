import Usuario from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from "bcrypt";
import "dotenv/config";

export const handleLogin =  async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res
            .status(400)
            .json({ message: "Se requiere ingresar usuario y password" });
    
    const foundUser = await Usuario.findOne({ username: username }).exec();
    if (!foundUser) return res.sendStatus(401); //Unauthorized
    // evaluate password
    const match = await bcrypt.compare(password, foundUser.password);
    if (match) {

            // Send authorization roles and access token to user
            res.status(200).json(foundUser);
        } else {
            res.sendStatus(401);
        }
}

export const handleLogout =  async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //No content
    const refreshToken = cookies.jwt;

    // Is refreshToken in db?
    const foundUser = await Usuario.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
        return res.sendStatus(204);
    }

    // Delete refreshToken in db
    foundUser.refreshToken = '';
    const result = await foundUser.save();

    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    res.sendStatus(204);
}