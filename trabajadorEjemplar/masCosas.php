<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/editarPreguntas.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </head>
  <body>
    <div id="encabezado">
      <img src="imagenes/encabezado.jpg" alt="Foto Logo" class="plato">
      <?php
      session_start();
      if(isset($_SESSION['user']))
      {
        echo "<a class='usuario' href='modificarUsuarios.php'>".$_SESSION['user']." </a>";
       
      }
       
      ?>

     <div id="menu">
        <?php
          include 'menu.php';
          if(!isset($_SESSION['user']))
          {
            header("location: index.php");
          }
         ?>

      </div>
    </div>

    <div id="cuerpo">

     <h2>DETALLES AVANZADOS</h2>
        
     <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);" width="100%" height="480" src="https://charts.mongodb.com/charts-project-0-iwtsf/embed/charts?id=e8cb5443-8dca-4e9e-b753-e83f04115c79&theme=light"></iframe>
        <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2); top: 35px;
position: relative;"  width="100%" height="480" src="https://charts.mongodb.com/charts-project-0-iwtsf/embed/charts?id=10cd7a8b-d28a-44ec-a6e1-b675dc840a3b&theme=light%22%3E"></iframe>
    </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>

<script src="http://blog.ikhuerta.com/jsDownload/dollar_get.js" type="text/javascript"></script>
<script src="js/editarPreguntas.js"></script>







<!---->
