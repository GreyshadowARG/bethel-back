import Pasiva from "../../models/Pasiva.js";

export const pasarPasividad = async (req, res, next) => {
  const { id, nombre, motivo_pasividad, fecha, detalles, persona_datos } = req.body;

  const formatDate = (fecha) => {
    if(fecha != ""){
      const stringDay = String(fecha);
      const daySplit = stringDay.split("-");
      const day = daySplit[2];
      const month = daySplit[1];
      const year = daySplit[0];
  
      return `${day}-${month}-${year}`;
    }
    return fecha
  };

  try {
    const newPasiva = new Pasiva({
      id: id,
      nombre: nombre,
      motivo_pasividad: motivo_pasividad,
      fecha: formatDate(fecha),
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

export const getPasivaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const persona = await Pasiva.findById(id);
    
    res.status(200).json(persona);
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