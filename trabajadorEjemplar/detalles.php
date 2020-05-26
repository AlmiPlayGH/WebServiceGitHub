<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/estadisticas.css">
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

     <h2>ESTADISCAS</h2>

        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <div id="regions_div"></div>

        <div id="piechart_3d"></div>

            
     </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/detalles.js"></script>









<!---->
