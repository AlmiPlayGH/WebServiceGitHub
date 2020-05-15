Pregunta = require('./questionModel');

//Index actions
exports.index = function(req, res)
{
  Pregunta.get(function(err, preguntas){
    if(err)
    {
      res.json({status:"error",message: err});
    }
    res.json({status:"success",message:"Questions retrieved successfully",data: preguntas});
  });
};

exports.soloPregunta = function(req, res)
{
  Pregunta.getSoloPregunta(function(err, preguntas){
    if(err)
    {
      res.json({status:"error",message: err});
    }
    res.json({status:"success",message:"Questions retrieved successfully",data: preguntas});
  });
};

exports.new = function(req, res)
{
  var pregunta = new Pregunta();
  pregunta._id = req.body._id;
  pregunta.pregunta = req.body.pregunta;
  pregunta.pista = req.body.pista;
  pregunta.descripcion = req.body.descripcion;
  pregunta.imagen = req.body.imagen;
  pregunta.respuestas = req.body.respuestas;

  pregunta.save(function(err){
    if (err)
    {
      res.json({message:"error", data: err});
    }
    res.json({message:"New question saved!", data: pregunta});
  });
}

exports.delete = function(req, res)
{
  Pregunta.deleteOne({_id: req.params.pregunta_id}, function(err, serie){
    if(err)
    {
      res.send(err);
    }
    res.json({status:"success", message:"Question deleted"});
  });
}

exports.update = function(req, res)
{
  Pregunta.findById(req.params.pregunta_id, function(err, pregunta)
  {
    if(err)
    {
      res.send(err);
    }
    pregunta.pregunta = req.body.pregunta == null ? serie.pregunta : req.body.pregunta;
    pregunta.descripcion = req.body.descripcion == null ? serie.descripcion : req.body.descripcion;
    pregunta.pista = req.body.pista == null ? serie.pista : req.body.pista;
    pregunta.respuestas = req.body.respuestas == null ? serie.respuestas : req.body.respuestas;
    serie.save(function(err)
    {
      if(err)
        res.send(err);
      res.json({ message:"Question info updated", data: serie});
    });
  });
}

exports.view = function(req, res)
{
  Pregunta.findById(req.params.pregunta_id, function(err, pregunta){
    if(err)
    {
      res.json({status:"error",message: err});
    }
    res.json({data:pregunta});
  });
}

exports.getImagen = function(req,res)
{
  const path = require("path");
  res.sendFile(path.join(__dirname, "./uploads/"+req.params.nombre_imagen));
}

exports.deleteImagen = function(req, res)
{
  var fs = require('fs');
  var ruta = "./uploads/"+req.params.nombre_imagen;
  fs.unlink(ruta, function(err)
  {
    if(err)
    {
      res.json({message:"There was an error", data: err});
    } else {
      res.json({message:"image deleted"});
    }
  });
}

/*exports.getIdValido = function(req, res)
{
  Pregunta.find({$where:function(cont)
  {
    console.log(cont);
  }});
}*/

exports.getIdValido = async function(req, res)
{
  var idValido=-1;
  var noHaRetornado = true;
  var mongoose = require('./node_modules/mongoose');
  Pregunta.countDocuments({}, async function(error, cont)
  {
    if(error)
    {
      console.log("Error" + error);
    }
    console.log(cont);

    for (var i = 1; i <= cont; i++) {
      console.log("Contador i " + i);
      if(i==cont)
      {
        console.log("idvalido " + idValido);
        res.json({data:idValido-1});
      }else {
        await Pregunta.find({_id:i}, async function(error, pregunta)
        {
          if(error)
          {
            console.log("Error" + error);
          }
          if(pregunta == "")
          {
            noHaRetornado=false;
            console.log("Esta pregunta no existe");
            idValido=i;
          }
          if(noHaRetornado && i == cont-1)
          {
            console.log("Entra en no retornado");
            idValido=i+1;
          }
        });
      }
      console.log("id valido " + idValido);
    }
  });
}
