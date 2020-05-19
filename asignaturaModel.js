var mongoose = require('mongoose');

var asignaturaSchema = mongoose.Schema(
  {
    _id : Number,
    nombre : String
  }
);

var Asignatura = module.exports = mongoose.model('asignaturas', asignaturaSchema);

module.exports.get = function(callback, limit)
{
  Asignatura.find(callback).limit(limit);
}
