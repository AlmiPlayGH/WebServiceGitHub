//FileName: api-routes.js


//Initialize express router
let router = require('express').Router();
//Set default API response

router.get('/', function(req, res)
{
  console.log("llega");
  res.json(
    {
      status:'La API funciona bien',
      message:'Bienvend@s al mejor WS del mundo'
    }
  );
});
//Import game gameController
var questionController = require('./questionController');

//Films routes
router.route('/preguntas')
  //select solo con la pregunta
  .get(questionController.index)
  .post(questionController.new);

router.route('/soloPregunta')
  .get(questionController.soloPregunta);

router.route('/preguntasTipo/:id_tipo')
  .get(questionController.preguntasTipo);

router.route('/preguntas/:pregunta_id')
  .get(questionController.view)
  .put(questionController.update)
  .delete(questionController.delete);

router.route('/preguntas/imagen/:nombre_imagen')
  .get(questionController.getImagen)
  .delete(questionController.deleteImagen);

router.route('/getIdValido')
  .get(questionController.getIdValido);

// Asignaturas
var asignaturaController = require('./asignaturaController');
  router.route('/asignaturas')
  .get(asignaturaController.get);

//Export API routes
module.exports = router;
