import pkg from "mongoose";

const { Schema, model } = pkg;

const turnoSchema = new Schema({
  userId: {
    type: String,
  },
  nombre: {
    type: String,
  },
  tipo_turno: {
    type: String,
  },
  detalles: {
    type: String,
  },
  lugar_turno: {
    type: String,
  },
  dia_turno: {
    type: String,
  },
  hora_turno: {
    type: String,
  },
});

const Turno = model("Turno", turnoSchema);

export default Turno;
