import Persona from "../../models/Persona.js";

export const newTratamiento = async (req, res, next) => {
  const { id } = req.params;
  const { recibe_tratamiento, fecha_inicio, fecha_finalizacion, profesional_tratamiento, dia_tratamiento, hora_tratamiento, tratamiento_especial } = req.body;

  const formatDate = (fecha) => {
    if(fecha != ""){
      const stringDay = String(fecha);
      const daySplit = stringDay.split("-");
      const day = daySplit[2];
      const month = daySplit[1];
      const year = daySplit[0];
      ;
  
      return `${day}-${month}-${year}`;
    }
    return fecha
  };

  const inicioDate = formatDate(fecha_inicio);
  const finalDate = formatDate(fecha_finalizacion);
  
  const newTratamiento = 
        {
          recibe_tratamiento: recibe_tratamiento,
          fecha_inicio: inicioDate,
          fecha_finalizacion: finalDate,
          profesional_tratamiento: profesional_tratamiento,
          dia_tratamiento: dia_tratamiento,
          hora_tratamiento: hora_tratamiento,
          tratamiento_especial: tratamiento_especial,
        }

  try {
    await Persona.findByIdAndUpdate(id, {
      $push: { tratamientos: newTratamiento },
    });
  } catch (err) {
    next(err);
  }
  res.status(200).json("Registro exitoso");
};

export const getAllTratamientos = async (req, res, next) => {
  const { id } = req.params;

  try {
    const persona = await Persona.findById(id);
    const tratamientosArray = persona.tratamientos;
    res.status(200).json(tratamientosArray)
  } catch (err) {
    next(err)
  }

};

export const eliminarTratamiento = async (req, res, next) => {
  const { idPersona, idTratamiento } = req.params;

  try {
    const persona = await Persona.findByIdAndUpdate(idPersona, {
      $pull: { tratamientos: { _id: idTratamiento } },
    });
    res.status(200).json(persona);
  } catch (err) {
    next(err)
  }
};
