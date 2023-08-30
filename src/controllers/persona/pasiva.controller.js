import Pasiva from "../../models/Pasiva.js";

export const pasarPasividad = async (req, res, next) => {
  const { nombre, motivo_pasividad, fecha, detalles, persona_datos } = req.body;

  try {
    const newPasiva = new Pasiva({
      nombre: nombre,
      motivo_pasividad: motivo_pasividad,
      fecha: fecha,
      detalles: detalles,
      persona_datos: persona_datos,
    });

    const pasivaCargada = await newPasiva.save();

    res.status(201).json(pasivaCargada);
  } catch (err) {
    next(err);
  }
};

export const getPoblacionPasiva = async (req, res, next) => {
  try {
    const personas = await Pasiva.find();
    //if (!personas) return res.status(204).json({ message: "No hay personas registradas." });
    res.json(personas);
  } catch (err) {
    next(err);
  }
};

export const deletePasivaById = async (req, res, next) => {
  try {
    const { pasivaId } = req.params;
    const persona = await Pasiva.findByIdAndDelete(pasivaId);
    
    res.status(200).json(persona);
  } catch (err) {
    next(err);
  }
};