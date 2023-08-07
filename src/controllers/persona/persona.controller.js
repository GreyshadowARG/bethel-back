import Persona from "../../models/Persona.js";

export const newPersona = async (req, res, next) => {
  const {
    nombre,
    apellido,
    sexo,
    dni,
    casa,
    peso,
    talle,
    fecha_nacimiento,
    edad,
    obra_social,
    nombre_obra_social,
    numero_afiliado,
    codigo_afiliado,
    fecha_ingreso,
    area_pide_ingreso,
    documentacion_ingreso,
    detalle_area,
    condicion,
    motivo_ingreso,
    concurre_institucion_educativa,
    modalidad,
    maestra_integradora,
    nombre_maestra_integradora,
    telefono_maestra_integradora,
    ultimo_nivel_escolar,
    nivel_escolar,
    nivel_educativo,
    nombre_establecimiento_educativo,
    domicilio_establecimiento_educativo,
    telefono_establecimiento_educativo,
    tiene_discapacidad,
    tipo_discapacidad,
    certificado_discapacidad,
    prestaciones_certificado,
    fecha_emision_certificado,
    fecha_vencimiento_certificado,
    curatela,
    recibe_pension,
    acompanamiento_terapeutico,
    nombre_profesional_at,
    dia_atencion_at,
    horario_atencion_at,
    recibe_tratamiento,
    fecha_inicio,
    fecha_finalizacion,
    profesional_tratamiento,
    dia_tratamiento,
    hora_tratamiento,
    tratamiento_especial,
    nombre_padre,
    vive_padre,
    dni_padre,
    domicilio_padre,
    tel_padre,
    nombre_madre,
    vive_madre,
    dni_madre,
    domicilio_madre,
    tel_madre,
    nombre_referente,
    vive_referente,
    descripcion_referente,
    dni_referente,
    domicilio_referente,
    tel_referente,
    situacion_familiar_en_institucion,
    recibe_visitas,
    tipo_vinculo,
    nombre_viculo,
    frecuencia_visita,
    proceso_revinculacion,
  } = req.body;

  const formatDate = (fecha) => {
    const stringDay = String(fecha);
    const daySplit = stringDay.split("-");
    const day = daySplit[2];
    const month = daySplit[1];
    const year = daySplit[0];
    ;

    return `${day}-${month}-${year}`;
  };

  try {
    const newPersona = new Persona({
      nombre: nombre,
      apellido: apellido,
      sexo: sexo,
      dni: dni,
      casa: casa,
      peso: peso,
      talle: talle,
      fecha_nacimiento: formatDate(fecha_nacimiento),
      edad: edad,
      obra_social: obra_social,
      nombre_obra_social: nombre_obra_social,
      numero_afiliado: numero_afiliado,
      codigo_afiliado: codigo_afiliado,
      fecha_ingreso: formatDate(fecha_ingreso),
      area_pide_ingreso: area_pide_ingreso,
      documentacion_ingreso: documentacion_ingreso,
      detalle_area: detalle_area,
      condicion: condicion,
      motivo_ingreso: motivo_ingreso,
      concurre_institucion_educativa: concurre_institucion_educativa,
      maestra_integradora: maestra_integradora,
      nombre_maestra_integradora: nombre_maestra_integradora,
      telefono_maestra_integradora: telefono_maestra_integradora,
      modalidad: modalidad,
      ultimo_nivel_escolar: ultimo_nivel_escolar,
      nivel_escolar: nivel_escolar,
      nivel_educativo: nivel_educativo,
      nombre_establecimiento_educativo: nombre_establecimiento_educativo,
      domicilio_establecimiento_educativo: domicilio_establecimiento_educativo,
      telefono_establecimiento_educativo: telefono_establecimiento_educativo,
      tiene_discapacidad: tiene_discapacidad,
      tipo_discapacidad: tipo_discapacidad,
      certificado_discapacidad: certificado_discapacidad,
      prestaciones_certificado: prestaciones_certificado,
      tipo_discapacidad: tipo_discapacidad,
      fecha_emision_certificado: formatDate(fecha_emision_certificado),
      fecha_vencimiento_certificado: formatDate(fecha_vencimiento_certificado),
      curatela: curatela,
      recibe_pension: recibe_pension,
      acompanamiento_terapeutico: acompanamiento_terapeutico,
      nombre_profesional_at: nombre_profesional_at,
      dia_atencion_at: dia_atencion_at,
      horario_atencion_at: horario_atencion_at,
      tratamientos: [
        {
          recibe_tratamiento: recibe_tratamiento,
          fecha_inicio: fecha_inicio,
          fecha_finalizacion: fecha_finalizacion,
          profesional_tratamiento: profesional_tratamiento,
          dia_tratamiento: dia_tratamiento,
          hora_tratamiento: hora_tratamiento,
          tratamiento_especial: tratamiento_especial,
        },
      ],
      datos_padre_biologico: {
        nombre_padre: nombre_padre,
        vive_padre: vive_padre,
        dni_padre: dni_padre,
        domicilio_padre: domicilio_padre,
        telefono_padre: tel_padre,
      },
      datos_madre_biologica: {
        nombre_madre: nombre_madre,
        vive_madre: vive_madre,
        dni_madre: dni_madre,
        domicilio_madre: domicilio_madre,
        telefono_madre: tel_madre,
      },
      datos_referente_significativo: {
        nombre_referente: nombre_referente,
        vive_referente: vive_referente,
        descripcion_referente: descripcion_referente,
        dni_referente: dni_referente,
        domicilio_referente: domicilio_referente,
        telefono_referente: tel_referente,
      },
      situacion_familiar_en_institucion: situacion_familiar_en_institucion,
      recibe_visitas: recibe_visitas,
      tipo_vinculo: tipo_vinculo,
      nombre_viculo: nombre_viculo,
      frecuencia_visita: frecuencia_visita,
      proceso_revinculacion: proceso_revinculacion,
    });
    const personaCargada = await newPersona.save();

    console.log(`Se ha cargado a ${nombre} ${apellido} correctamente.`);
    res.status(201).json(personaCargada);
  } catch (error) {
    next(error);
  }
};

export const getAllPersonas = async (req, res, next) => {
  try {
    const personas = await Persona.find();
    //if (!personas) return res.status(204).json({ message: "No hay personas registradas." });
    res.json(personas);
  } catch (err) {
    next(err);
  }
};

export const getPersonaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const persona = await Persona.findById(id);
    
    res.status(200).json(persona);
  } catch (err) {
    next(err);
  }
};

export const deletePersonaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const persona = await Persona.findOneAndDelete(id);
    
    res.status(200);
  } catch (err) {
    next(err);
  }
};

export const getPersonaByLastName = async (req, res, next) => {
  try {
    const queryApellido = req.body;
    const persona = await Persona.findOne(queryApellido);
    res.json(persona);
  } catch (err) {
    next(err);
  }
};