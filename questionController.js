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
