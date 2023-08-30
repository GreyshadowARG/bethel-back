import Turno from "../../models/Turno.js";

export const newTurno = async (req, res, next) => {
  const {
    userId,
    nombre,
    tipo_turno,
    detalles,
    lugar_turno,
    dia_turno,
    hora_turno,
  } = req.body;

  const formatDate = (fecha) => {
    const stringDay = String(fecha);
    const daySplit = stringDay.split("-");
    const day = daySplit[2];
    const month = daySplit[1];
    const year = daySplit[0];
    return `${day}-${month}-${year}`;
  };

  const newTurno = new Turno({
    userId: userId,
    nombre: nombre,
    tipo_turno: tipo_turno,
    detalles: detalles,
    lugar_turno: lugar_turno,
    dia_turno: formatDate(dia_turno),
    hora_turno: hora_turno,
  });

  try {
    const turnoCargado = await newTurno.save();
    res.status(200).json(turnoCargado);
  } catch (err) {
    next(err);
  }
};

export const getAllTurnos = async (req, res, next) => {
  try {
    const turnos = await Turno.find();
    res.status(200).json(turnos);
  } catch (err) {
    next(err);
  }
};

export const getTurnosByPersona = async (req, res, next) => {
  const { userId } = req.params;
  const turnosArray = []

  try {
    const turnos = await Turno.find();
    turnos.forEach((turno) => {
      if(turno.userId == userId){
        turnosArray.push(turno)
      }
    })

    res.status(200).json(turnosArray);
  } catch (err) {
    next(err);
  }
};

export const eliminarTurno = async (req, res, next) => {
  try {
    const { idTurno } = req.params;
    const turno = await Turno.findByIdAndDelete(idTurno)
    
    res.status(200).json(turno);
  } catch (err) {
    next(err);
  }
};
