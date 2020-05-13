//FileName: index.js

const http = require("http");
const path = require("path");
const fs = require("fs");

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


//BLOQUE MULTER
const multer = require("multer");
const handleError = (err, res) => {
  res
    .status(500)
    .contentType("text/plain")
    .end("Oops! Something went wrong!");
};
const upload = multer({
  dest: "/path/to/temporary/directory/to/store/uploaded/files"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});
app.post(
  "/uploadImagen",
  upload.single("file" /* name attribute of <file> element in your form */),
  (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, "./uploads/image.png");

    if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .end("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .png files are allowed!");
      });
    }
  }
);

//Use API routes in the app
app.use('/api', apiRoutes);

//Launch app to listen to specific port
app.listen(port, '0.0.0.0', function()
{
  console.log("Server lanzando en el puerto " + port);
});
