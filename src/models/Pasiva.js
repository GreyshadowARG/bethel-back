import pkg from "mongoose";

const { Schema, model } = pkg;

const pasivaSchema = new Schema({
  nombre: {
    type: String,
  },
  motivo_pasividad: {
    type: String,
  },
  fecha: {
    type: String,
  },
  detalles: {
    type: String,
  },
  persona_datos: {
    type: Object,
  },
});

const Pasiva = model("Pasiva", pasivaSchema);

export default Pasiva;
