var mongoose = require('mongoose');

var questionSchema = mongoose.Schema(
  {
    _id:Number,
    pregunta:{type:String,required: true},
    descripcion:String,
    pista:String,
    imagen:String,
    texto:String,
    tipoPregunta:Number,
    respuestas:[
      []
    ]
  }
);

var Pregunta = module.exports = mongoose.model('preguntas', questionSchema);

module.exports.get = function(callback, limit)
{
  Pregunta.find(callback).limit(limit);
}

module.exports.getSoloPregunta = function(callback, limit)
{
  Pregunta.find({},{pregunta:1},callback).limit(limit);
}
