//FileName: index.js

//Import Body parser
let bodyParser = require('body-parser');

//Import mongoose
let mongoose = require('mongoose');

//Import express
let express = require('express');

//Initialize the app
let app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Import routes
let apiRoutes = require("./api-routes");

//Configure bodyParser to handle post requests
app.use(bodyParser.urlencoded(
{
    extended: true
}));
app.use(bodyParser.json());

//Connect to mongoose

mongoose.connect('mongodb://127.0.0.1:27017/reto',
  {
    useNewUrlParser:true,
    useUnifiedTopology: true
  }).then(res=>{
            console.log("conectado")
    }).catch(err => {
      console.log( err.message);
    });

var db = mongoose.connection;

//Check DB connection
/*if(!db)
{
  console.log("Error connecting DB");
} else
{
    console.log("DB connected successfully");
}*/

//Setup server port
var port = process.env.PORT || 8181;

//Send message for default URL
app.get('/', (req, res) => res.send('El web service esta lanzado correctamente'));


//Use API routes in the app
app.use('/api', apiRoutes);




//Launch app to listen to specific port
app.listen(port, '0.0.0.0', function()
{
  console.log("Server lanzando en el puerto " + port);
});
