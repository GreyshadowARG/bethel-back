import Persona from "../../models/Persona.js";

export const newMovimiento = async (req, res, next) => {
  const { id } = req.params;
  const { tipo_egreso, fecha_egreso, fecha_regreso, nombre_persona_a_cargo, vinculo, datos_contacto, descripcion_visita } = req.body;

  const newMovimiento = 
        {
          tipo_egreso: tipo_egreso,
          fecha_egreso: fecha_egreso,
          fecha_regreso: fecha_regreso,
          nombre_persona_a_cargo: nombre_persona_a_cargo,
          vinculo: vinculo,
          datos_contacto: datos_contacto,
          descripcion_visita: descripcion_visita
        }

  try {
    await Persona.findByIdAndUpdate(id, {
      $push: { movimientos: newMovimiento },
    });
    console.log("El movimiento se registró correctamente.");
  } catch (err) {
    next(err);
  }
  res.status(200).json("Registro exitoso");
};

export const getAllMovimientos = async (req, res, next) => {
  const { id } = req.params;

  try {
    const persona = await Persona.findById(id);
    const movimientosArray = persona.movimientos;
    res.status(200).json(movimientosArray)
  } catch (err) {
    next(err)
  }
};

export const eliminarMovimiento = async (req, res, next) => {
  const { idPersona, idMovimiento } = req.params;

  try {
    const persona = await Persona.findByIdAndUpdate(idPersona, {
      $pull: { movimientos: { _id: idMovimiento } },
    });
    console.log("Movimiento eliminado");
    res.status(200).json(persona);
  } catch (err) {
    next(err)
  }
};
