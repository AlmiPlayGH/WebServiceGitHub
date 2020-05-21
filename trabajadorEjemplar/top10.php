<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet">
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
         echo "<a class='usuario'>".$_SESSION['user']."</a>";
         
        }
      ?>
      
     <div id="menu">
        <?php
          include 'menu.php';
         ?>

      </div>
    </div>

    <div id="cuerpo">
      
     <h2>TOP 10</h2>

     <a class = "volver" href="detalles.php">Detalles</a>

      <img src="imagenes/guanteAbierto.png" alt="guante Abierto" class="guanteAbierto" >

      <table id=tablita>
       
        

      </table>

    </div>

  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/top10.js"></script>









<!---->
