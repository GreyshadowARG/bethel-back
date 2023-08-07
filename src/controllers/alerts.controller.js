import Persona from "../models/Persona.js";
import Turno from "../models/Turno.js";

export const getBirthdayDates = async (req, res, next) => {
  const personasArray = await Persona.find();
  const arrayHoy = [];
  const arrayProxSemana = [];
  const arrayProxMes = [];

  const getDaysPerMonth = (months) => {
    let result = 0;
    switch (months) {
      case 1:
        result = 0;
        break;
      case 2:
        result = 31;
        break;
      case 3:
        result = 59;
        break;
      case 4:
        result = 90;
        break;
      case 5:
        result = 120;
        break;
      case 6:
        result = 151;
        break;
      case 7:
        result = 181;
        break;
      case 8:
        result = 212;
        break;
      case 9:
        result = 243;
        break;
      case 10:
        result = 273;
        break;
      case 11:
        result = 304;
        break;
      case 12:
        result = 334;
        break;
    }
    return result;
  };

  const getToday = () => {
    const today = new Date();

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    let result = getDaysPerMonth(Number(mm)) + Number(dd);
    return result;
  };

  const presentDays = getToday();

  personasArray.forEach((item) => {
    const fecha = item.fecha_nacimiento;

    const daySplit = fecha.split("-");
    const day = Number(daySplit[0]);
    const month = Number(daySplit[1]);

    const itemDays = getDaysPerMonth(month) + day;

    if (itemDays < presentDays) {
      console.log("Ya paso");
    } else if (itemDays == presentDays) {
      arrayHoy.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        fecha_nacimiento: item.fecha_nacimiento,
        casa: item.casa,
      });
    } else if (itemDays <= presentDays + 7 && itemDays > presentDays) {
      arrayProxSemana.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        fecha_nacimiento: item.fecha_nacimiento,
        casa: item.casa,
      });
    } else if (itemDays <= presentDays + 30 && itemDays  > presentDays) {
      arrayProxMes.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        fecha_nacimiento: item.fecha_nacimiento,
        casa: item.casa,
      });
    }
  });
  
  res.json({
    hoy: arrayHoy,
    proxSem: arrayProxSemana,
    proxMes: arrayProxMes,
  });
};

export const getVencimientoCertif = async (req, res, next) => {
  const personasArray = await Persona.find();
  const arrayHoy = [];
  const arrayProxSemana = [];
  const arrayProxMes = [];

  const getDaysPerMonth = (months) => {
    let result = 0;
    switch (months) {
      case 1:
        result = 0;
        break;
      case 2:
        result = 31;
        break;
      case 3:
        result = 59;
        break;
      case 4:
        result = 90;
        break;
      case 5:
        result = 120;
        break;
      case 6:
        result = 151;
        break;
      case 7:
        result = 181;
        break;
      case 8:
        result = 212;
        break;
      case 9:
        result = 243;
        break;
      case 10:
        result = 273;
        break;
      case 11:
        result = 304;
        break;
      case 12:
        result = 334;
        break;
    }
    return result;
  };

  const getToday = () => {
    const today = new Date();

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    let result = getDaysPerMonth(Number(mm)) + Number(dd);
    return result;
  };

  const presentDays = getToday();

  personasArray.forEach((item) => {
    const fecha = item.fecha_vencimiento_certificado;

    const daySplit = fecha.split("-");
    const day = Number(daySplit[0]);
    const month = Number(daySplit[1]);

    const itemDays = getDaysPerMonth(month) + day;

    if (itemDays < presentDays) {
      console.log("Ya paso");
    } else if (itemDays == presentDays) {
      arrayHoy.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        prestaciones_certificado: item.prestaciones_certificado,
        fecha_vencimiento_certificado: item.fecha_vencimiento_certificado,
      });
    } else if (itemDays <= presentDays + 7 && itemDays > presentDays) {
      arrayProxSemana.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        prestaciones_certificado: item.prestaciones_certificado,
        fecha_vencimiento_certificado: item.fecha_vencimiento_certificado,
      });
    } else if (itemDays <= presentDays + 30 && itemDays > presentDays) {
      arrayProxMes.push({
        id: item._id,
        nombre: `${item.nombre} ${item.apellido}`,
        prestaciones_certificado: item.prestaciones_certificado,
        fecha_vencimiento_certificado: item.fecha_vencimiento_certificado,
      });
    }
  });

  res.json({
    hoy: arrayHoy,
    proxSem: arrayProxSemana,
    proxMes: arrayProxMes,
  });
};

export const getTurnos = async (req, res, next) => {
  const turnosArray = await Turno.find();
  const arrayHoy = [];
  const arrayProxSemana = [];
  const arrayProxMes = [];

  const getDaysPerMonth = (months) => {
    let result = 0;
    switch (months) {
      case 1:
        result = 0;
        break;
      case 2:
        result = 31;
        break;
      case 3:
        result = 59;
        break;
      case 4:
        result = 90;
        break;
      case 5:
        result = 120;
        break;
      case 6:
        result = 151;
        break;
      case 7:
        result = 181;
        break;
      case 8:
        result = 212;
        break;
      case 9:
        result = 243;
        break;
      case 10:
        result = 273;
        break;
      case 11:
        result = 304;
        break;
      case 12:
        result = 334;
        break;
    }
    return result;
  };

  const getToday = () => {
    const today = new Date();

    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    let result = getDaysPerMonth(Number(mm)) + Number(dd);
    return result;
  };

  const presentDays = getToday();

  turnosArray.forEach((item) => {
    const fecha = item.dia_turno;

    const daySplit = fecha.split("-");
    const day = Number(daySplit[0]);
    const month = Number(daySplit[1]);

    const itemDays = getDaysPerMonth(month) + day;

    if (itemDays < presentDays) {
      console.log("Ya paso");
    } else if (itemDays == presentDays) {
      arrayHoy.push({
        id: item._id,
        nombre: `${item.nombre}`,
        tipo_turno: item.tipo_turno,
        lugar_turno: item.lugar_turno,
        dia_turno: item.dia_turno,
      });
    } else if (itemDays <= presentDays + 7 && itemDays > presentDays) {
      arrayProxSemana.push({
        id: item._id,
        nombre: `${item.nombre}`,
        tipo_turno: item.tipo_turno,
        lugar_turno: item.lugar_turno,
        dia_turno: item.dia_turno,
      });
    } else if (itemDays <= presentDays + 30 && itemDays > presentDays) {
      arrayProxMes.push({
        id: item._id,
        nombre: `${item.nombre}`,
        tipo_turno: item.tipo_turno,
        lugar_turno: item.lugar_turno,
        dia_turno: item.dia_turno,
      });
    }
  });

  res.json({
    hoy: arrayHoy,
    proxSem: arrayProxSemana,
    proxMes: arrayProxMes,
  });
};