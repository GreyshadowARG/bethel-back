import User from "../models/User.js";
import bcrypt from "bcrypt";

export const newUser = async (req, res) => {
  const { username, password, rol } = req.body;
  if (!username || !password || !rol)
    return res.status(400).json({ message: "Faltan datos." });

  // verificar si el email ya esta registrado en la db
  const duplicate = await User.findOne({ username: username }).exec();
  if (duplicate)
    return res.status(409).json({ message: "El nombre de usuario ya fue utilizado" });

  try {
    // encryptacion de password
    const hashedPassword = await bcrypt.hash(password, 10);

    // creacion y guardado de nuevo usuario
    const result = await User.create({
      username: username,
      password: hashedPassword,
      rol: rol,
    });

    res.status(201).json({ success: `Nuevo usuario ${username} creado!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) return res.status(204).json({ message: "No hay personas registradas." });
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};