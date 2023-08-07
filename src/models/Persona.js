import pkg from "mongoose";

const { Schema, model } = pkg;

const personaSchema = new Schema({
  nombre: {
    type: String,
  },
  apellido: {
    type: String,
  },
  sexo: {
    type: String,
  },
  dni: {
    type: String,
  },
  casa: {
    type: String,
  },
  peso: {
    type: String,
  },
  talle: {
    type: String,
  },
  fecha_nacimiento: {
    type: String,
  },
  edad: {
    type: String,
  },
  obra_social: {
    type: String,
  },
  nombre_obra_social: {
    type: String,
  },
  numero_afiliado: {
    type: String,
  },
  codigo_afiliado: {
    type: String,
  },
  fecha_ingreso: {
    type: String,
  },
  documentacion_ingreso: {
    type: String,
  },
  area_pide_ingreso: {
    type: String,
  },
  detalle_area: {
    type: String,
  },
  condicion: {
    type: String,
  },
  motivo_ingreso: {
    type: String,
  },
  concurre_institucion_educativa: {
    type: String,
  },
  maestra_integradora: {
    type: String,
  },
  nombre_maestra_integradora: {
    type: String,
  },
  telefono_maestra_integradora: {
    type: String,
  },
  ultimo_nivel_escolar: {
    type: String,
  },
  nivel_escolar: {
    type: String,
  },
  nivel_educativo: {
    type: String,
  },
  modalidad: {
    type: String,
  },
  nombre_establecimiento_educativo: {
    type: String,
  },
  domicilio_establecimiento_educativo: {
    type: String,
  },
  telefono_establecimiento_educativo: {
    type: String,
  },
  tiene_discapacidad: {
    type: String,
  },
  tipo_discapacidad: {
    type: String,
  },
  certificado_discapacidad: {
    type: String,
  },
  prestaciones_certificado: {
    type: String,
  },
  tipo_discapacidad: {
    type: String,
  },
  fecha_emision_certificado: {
    type: String,
  },
  fecha_vencimiento_certificado: {
    type: String,
  },
  prestaciones_certificado: {
    type: String,
  },
  curatela: {
    type: String,
  },
  recibe_pension: {
    type: String,
  },
  acompanamiento_terapeutico: {
    type: String,
  },
  nombre_profesional_at: {
    type: String,
  },
  dia_atencion_at: {
    type: String,
  },
  horario_atencion_at: {
    type: String,
  },
  tratamientos: {
    type: [
      {
        recibe_tratamiento: String,
        fecha_inicio: String,
        fecha_finalizacion: String,
        profesional_tratamiento: String,
        dia_tratamiento: String,
        hora_tratamiento: String,
        tratamiento_especial: String,
      },
    ],
  },
  datos_padre_biologico: {
    type: {
      nombre_padre: String,
      vive_padre: String,
      dni_padre: String,
      domicilio_padre: String,
      telefono_padre: String,
    },
  },
  datos_madre_biologica: {
    type: {
      nombre_madre: String,
      vive_madre: String,
      dni_madre: String,
      domicilio_madre: String,
      telefono_madre: String,
    },
  },
  datos_referente_significativo: {
    type: {
      nombre_referente: String,
      vive_referente: String,
      descripcion_referente: String,
      dni_referente: String,
      domicilio_referente: String,
      telefono_referente: String,
    },
  },
  situacion_familiar: {
    type: String,
  },
  recibe_visitas: {
    type: String,
  },
  tipo_vinculo: {
    type: String,
  },
  nombre_vinculo: {
    type: String,
  },
  frecuencia_visita: {
    type: String,
  },
  proceso_revinculacion: {
    type: String,
  },
  movimientos: {
    type: [
      {
        tipo_egreso: String,
        fecha_egreso: String,
        fecha_regreso: String,
        nombre_persona_a_cargo: String,
        vinculo: String,
        datos_contacto: String,
        descripcion_visita: String,
      },
    ],
  },
  actividades: {
    type: [
      {
        nombre_actividad: String,
        lugar_actividad: String,
        detalles_actividad: String,
        dia_actividad: String,
        horario_actividad: String,
      },
    ],
  },
});

const Persona = model("Persona", personaSchema);

export default Persona;
