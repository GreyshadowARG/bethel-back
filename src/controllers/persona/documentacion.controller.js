import Persona from "../../models/Persona.js";
import formidable from "formidable";

export const newDocumentacion = async (req, res, next) => {
  console.log("Hola")
  const form = new formidable.IncomingForm();
  console.log(form)

    form.parse(req);

    form.on("fileBegin", function (name, file) {
      file.path = __dirname + "/uploads/" + "Hola";
    });

    form.on("file", function () {
      console.log("Documentacion cargada" + "Holas");
    });

    res.sendFile(__dirname + "index.html");

    res.status(200).json("Registro exitoso");

};

