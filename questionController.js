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
  pregunta.pregunta = req.body.pregunta;
  pregunta.pista = req.body.pista;
  pregunta.descripcion = req.body.descripcion;
  pregunta.respuestas = req.body.respuestas;

  pregunta.save(function(err){
    res.json({message:"New series saved!", data: pregunta});
  });
}

exports.delete = function(req, res)
{
  Pregunta.deleteOne({_id: req.params.pregunta_id}, function(err, serie){
    if(err)
    {
      res.send(err);
    }
    res.json({status:"success", message:"Serie deleted"});
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
      res.json({ message:"serie info updated", data: serie});
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
