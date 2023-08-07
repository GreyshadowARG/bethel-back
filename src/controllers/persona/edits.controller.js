import Persona from "../../models/Persona.js";

export const editDatosPersonales = async (req, res, next) => {
  const { id } = req.params;
  const { sexo, dni, edad, casa, peso, talle, fecha_nacimiento } = req.body;

  const changeFormatDate = (fecha) => {
    const stringDay = String(fecha);
    const daySplit = stringDay.split("-");
    let finalDate = "";

    if (daySplit[0].length < 4) {
      const day = daySplit[0];
      const month = daySplit[1];
      const year = daySplit[2];
      finalDate = `${day}-${month}-${year}`;
    } else {
      const day = daySplit[2];
      const month = daySplit[1];
      const year = daySplit[0];

      finalDate = `${day}-${month}-${year}`;
    }

    return finalDate;
  };

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        sexo: sexo,
        dni: dni,
        edad: edad,
        casa: casa,
        peso: peso,
        talle: talle,
        fecha_nacimiento: changeFormatDate(fecha_nacimiento),
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const editObraSocial = async (req, res, next) => {
  const { id } = req.params;
  const { obra_social, nombre_obra_social, numero_afiliado, codigo_afiliado } =
    req.body;

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        obra_social: obra_social,
        nombre_obra_social: nombre_obra_social,
        numero_afiliado: numero_afiliado,
        codigo_afiliado: codigo_afiliado,
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const editIngreso = async (req, res, next) => {
  const { id } = req.params;
  const {
    fecha_ingreso,
    documentacion_ingreso,
    area_pide_ingreso,
    detalle_area,
    condicion,
    motivo_ingreso,
  } = req.body;

  const changeFormatDate = (fecha) => {
    const stringDay = String(fecha);
    const daySplit = stringDay.split("-");
    let finalDate = "";

    if (daySplit[0].length < 4) {
      const day = daySplit[0];
      const month = daySplit[1];
      const year = daySplit[2];
      finalDate = `${day}-${month}-${year}`;
    } else {
      const day = daySplit[2];
      const month = daySplit[1];
      const year = daySplit[0];

      finalDate = `${day}-${month}-${year}`;
    }

    return finalDate;
  };

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        fecha_ingreso: changeFormatDate(fecha_ingreso),
        documentacion_ingreso: documentacion_ingreso,
        area_pide_ingreso: area_pide_ingreso,
        detalle_area: detalle_area,
        condicion: condicion,
        motivo_ingreso: motivo_ingreso,
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const editEscolaridad = async (req, res, next) => {
  const { id } = req.params;
  const {
    concurre_institucion_educativa,
    ultimo_nivel_escolar,
    nivel_escolar,
    nivel_educativo,
    maestra_integradora,
    nombre_maestra_integradora,
    telefono_maestra_integradora,
    modalidad,
    nombre_establecimiento_educativo,
    domicilio_establecimiento_educativo,
    telefono_establecimiento_educativo,
  } = req.body;

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        concurre_institucion_educativa: concurre_institucion_educativa,
        ultimo_nivel_escolar: ultimo_nivel_escolar,
        nivel_escolar: nivel_escolar,
        nivel_educativo: nivel_educativo,
        maestra_integradora: maestra_integradora,
        nombre_maestra_integradora: nombre_maestra_integradora,
        telefono_maestra_integradora: telefono_maestra_integradora,
        modalidad: modalidad,
        nombre_establecimiento_educativo: nombre_establecimiento_educativo,
        domicilio_establecimiento_educativo:
        domicilio_establecimiento_educativo,
        telefono_establecimiento_educativo: telefono_establecimiento_educativo,
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const editDiscapacidad = async (req, res, next) => {
  const { id } = req.params;
  const {
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
  } = req.body;

  const changeFormatDate = (fecha) => {
    const stringDay = String(fecha);
    const daySplit = stringDay.split("-");
    let finalDate = "";

    if (daySplit[0].length < 4) {
      const day = daySplit[0];
      const month = daySplit[1];
      const year = daySplit[2];
      finalDate = `${day}-${month}-${year}`;
    } else {
      const day = daySplit[2];
      const month = daySplit[1];
      const year = daySplit[0];

      finalDate = `${day}-${month}-${year}`;
    }

    return finalDate;
  };

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        tiene_discapacidad: tiene_discapacidad,
        tipo_discapacidad: tipo_discapacidad,
        certificado_discapacidad: certificado_discapacidad,
        prestaciones_certificado: prestaciones_certificado,
        fecha_emision_certificado: changeFormatDate(fecha_emision_certificado),
        fecha_vencimiento_certificado: changeFormatDate(fecha_vencimiento_certificado),
        curatela: curatela,
        recibe_pension: recibe_pension,
        acompanamiento_terapeutico: acompanamiento_terapeutico,
        nombre_profesional_at: nombre_profesional_at,
        dia_atencion_at: dia_atencion_at,
        horario_atencion_at: horario_atencion_at,
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

export const editFamiliares = async (req, res, next) => {
  const { id } = req.params;
  const {
    nombre_madre,
    vive_madre,
    dni_madre,
    domicilio_madre,
    telefono_madre,
    nombre_padre,
    vive_padre,
    dni_padre,
    domicilio_padre,
    telefono_padre,
    nombre_referente,
    descripcion_referente,
    vive_referente,
    dni_referente,
    domicilio_referente,
    telefono_referente,
  } = req.body;

  try {
    const persona = await Persona.findByIdAndUpdate(id, {
      $set: {
        datos_madre_biologica:{
          nombre_madre: nombre_madre,
          vive_madre: vive_madre,
          dni_madre: dni_madre,
          domicilio_madre: domicilio_madre,
          telefono_madre: telefono_madre
        },
        datos_padre_biologico:{
          nombre_padre: nombre_padre,
          vive_padre: vive_padre,
          dni_padre: dni_padre,
          domicilio_padre: domicilio_padre,
          telefono_padre: telefono_padre
        },
        datos_referente_significativo:{
          nombre_referente: nombre_referente,
          descripcion_referente: descripcion_referente,
          vive_referente: vive_referente,
          dni_referente: dni_referente,
          domicilio_referente: domicilio_referente,
          telefono_referente: telefono_referente
        }
      },
    });

    res.status(200).json();
  } catch (err) {
    next(err);
  }
};
