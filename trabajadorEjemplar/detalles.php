<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/top10.css">
  </head>
  <body>
    <div id="encabezado">
      <img src="imagenes/logo.png" alt="Foto Logo" class="logo">
      <img src="imagenes/encabezado.jpg" alt="Foto Logo" class="plato">
      <?php
      session_start();
      if(isset($_SESSION['user']))
      {
        echo "<a class='usuario' href='estadisticas.php'>".$_SESSION['user']." </a>";
       
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
        <div id="regions_div" style="width: 900px; height: 500px;"></div>
            
     </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/detalles.js"></script>









<!---->
