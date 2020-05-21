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

     <h2>EDITAR PREGUNTAS</h2>
        <div id="groupChecks">
        <h4>FILTROS</h4><br>
         <div id="group">
          <input type="checkbox" id="check0" name="ID" value="ID">
            <label for="ID">ID</label><br><br>
            <input type="checkbox" id="check1" name="Pregunta" value="Pregunta" >
            <label for="Pregunta">Pregunta</label><br><br>
            <input type="checkbox" id="check2" name="Respuestas" value="Respuestas">
            <label for="Respuestas">Respuestas</label><br><br>
            <input type="checkbox" id="check3" name="Texto" value="Texto">
            <label for="Texto">Texto</label><br><br>
            <input type="checkbox" id="check4" name="Pista" value="Pista">
            <label for="Pista">Pista</label><br><br>
         </div>
         <button type="button" id="cargar">Cargar filtro</button><br><br>
         <button type="button" id="quitar">Deshacer filtro</button><br><br>
        
          <div id="elementosFiltro">
              <label for="filtro">Introducir búsqueda:</label>
              <input type="text" id="fil" name="filtro"/><br><br>
          </div>
          <a class='boton' href='añadirPregunta.php'>Añadir pregunta</a>
          
          <!--BOTON DIALOG QUE NO VA
          <a><button class="button-default link">Go to Google</button></a>-->

        </div>
        
        
          
      <div id="preguntas">
      
      <select id="asig">
        <option value=0>-- Seleccione una asignatura --</option>
        
      </select>
        <table id=tablita>
        
        </table>
        <span class="ir-arriba icon-arrow-up2 material-icons">expand_less</span>
      </div>

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
