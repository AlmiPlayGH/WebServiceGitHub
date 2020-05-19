Asignatura = require('./asignaturaModel');
exports.get = function(req, res)
{
  Asignatura.get(function(err, asignaturas){
    if(err)
    {
      res.json({status:"error",message: err});
    }
    res.json({status:"success",message:"Asignaturas retrieved successfully",data: asignaturas});
  });
};
