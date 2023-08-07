import Persona from "../../models/Persona.js";

export const newActividad = async (req, res, next) => {
  const { id } = req.params;
  const { nombre_actividad, lugar_actividad, detalles_actividad, dia_actividad, horario_actividad } = req.body;

  const newActividad = 
        {
          nombre_actividad: nombre_actividad,
          lugar_actividad: lugar_actividad,
          detalles_actividad: detalles_actividad,
          dia_actividad: dia_actividad,
          horario_actividad: horario_actividad,
        }

  try {
    await Persona.findByIdAndUpdate(id, {
      $push: { actividades: newActividad },
    });
    console.log("La actividad se registró correctamente.");
  } catch (err) {
    next(err);
  }
  res.status(200).json("Registro exitoso");
};

export const getAllActividades = async (req, res, next) => {
  const { id } = req.params;

  try {
    const persona = await Persona.findById(id);
    const actividadesArray = persona.actividades;
    res.status(200).json(actividadesArray)
  } catch (err) {
    next(err)
  }
};

export const eliminarActividad = async (req, res, next) => {
  const { idPersona, idActividad } = req.params;

  try {
    const persona = await Persona.findByIdAndUpdate(idPersona, {
      $pull: { actividades: { _id: idActividad } },
    });
    console.log("Actividad eliminada");
    res.status(200).json(persona);
  } catch (err) {
    next(err)
  }
};
