export default class Persona {
    constructor(nombre, apellido, sexo, dni, casa, peso, talle, fecha_nacimiento, edad) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.sexo = sexo;
      this.dni = dni;
      this.casa = casa;
      this.peso = peso;
      this.talle = talle;
      this.fecha_nacimiento = fecha_nacimiento;
      this.edad = edad;
      this.obra_social = obra_social;
      this.prestadora = prestadora;
      this.numero_afiliado = numero_afiliado;
      this.codigo_afiliado = codigo_afiliado;
      this.fecha_ingreso = fecha_ingreso;
      this.area_pide_ingreso = area_pide_ingreso;
      this.condicion = condicion;
      this.motivo_ingreso = motivo_ingreso;
      this.concurre_institucion_educativa = concurre_institucion_educativa;
      this.modalidad = modalidad;
      this.nivel_escolar = nivel_escolar;
      this.nivel_educativo = nivel_educativo;
      this.nombre_establecimiento_educativo = nombre_establecimiento_educativo;
      this.domicilio_establecimiento_educativo = domicilio_establecimiento_educativo;
    }

    getData(){
        const string = "${this.nombre} ${this.apellido}"
        return string;
    }
  }

