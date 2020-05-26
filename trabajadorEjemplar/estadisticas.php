<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/misEstadisticas.css">
  </head>
  <body>
    <div id="encabezado">
     
      <img src="imagenes/encabezado.jpg" alt="Foto Logo" class="plato">
      <?php
      session_start();
      if(isset($_SESSION['user']))
      {
        echo "<a class='usuario'href='modificarUsuarios.php'>".$_SESSION['user']." </a>";
       
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

     <h2>MIS ESTADISCAS</h2>

     <div id="promedios">
        <h3>PROMEDIOS</h3>
        <table>
          <tr class="barra">
            <th>PUNTUACION</th>
            <th>TIEMPO</th>
            <th>ACIERTOS</th>           
            <th>TOTAL DE PARTIDAS</th>
          </tr>
          <?php
              session_start();
              include_once  'datos.php';
              
              $puntuacionMedia = getMediaPuntuacion($_SESSION['user']);
              $tiempoMedia = getMediaTiempo($_SESSION['user']);
              $correctasMedia = getMediaCorrectas($_SESSION['user']);
              
                echo "<tr>";
                echo "<td>".$puntuacionMedia."</td>";
                echo "<td>".$tiempoMedia."</td>";
                echo "<td>".$correctasMedia."</td>";
                echo "<td id='total'></td>";
                echo "</tr>";
              
          ?>

        </table>
 
      </div>

     <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
   
      <div id="chart_div"></div>

      <div id="columnchart_values"></div>

      <div id="piechart"></div>

        
      
      
     </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/estadisticas.js"></script>









<!---->
