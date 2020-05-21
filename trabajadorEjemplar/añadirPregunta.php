<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/añadirPregunta.css">
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

     <h2>AÑADIR PREGUNTA</h2>
     <form id="formulario">
      <a class = "volver" href="editarPreguntas.php">Volver</a>
      <h1>Nueva Pregunta</h1>
        <label for="Pregunta">Pregunta</label>
        <input type="text" id="Pregunta" name="Pregunta" placeholder="Introduzca una pregunta"/><br>
        
        <label for="A">Respuesta a):</label>
        <input type="text" id="A" name="A" />
        <label for="B">Respuesta b):</label>
        <input type="text" id="B" name="B" />
        <label for="C">Respuesta c):</label>
        <input type="text" id="C" name="C" /><br>
        <label for="D">Respuesta d):</label>
        <input type="text" id="D" name="D" /><br>

        <label for="imagen">Select Image</label>
        <input type="file" name="file" id="file" />
        <br />
        <span id="uploaded_image"></span>
        

        <label for="Pista">Pista</label>
        <input type="text" id="Pista" name="Pista"/><br>
        <label for="Descripcion">Descripción</label>
        <input type="text" id="Descripcion" name="Descripcion"/><br><br>

        <select id="asig">
        <option value=0>-- Seleccione una asignatura --</option>
        
        </select><br><br>

        <label for="correct">Respuesta correcta:</label><br>
        
        <label for="Respuestas">A)</label>
        <input type="checkbox" class="check" name="a" value="a"><br>
        <label for="Respuestas">B)</label>
        <input type="checkbox" class="check" name="b" value="b"><br>
        <label for="Respuestas">C)</label>
        <input type="checkbox" class="check" name="c" value="c"><br>
        <label for="Respuestas">D)</label>
        <input type="checkbox" class="check" name="d" value="d"><br>

        <button type="button" id="cargar">Añadir pregunta</button><br><br>
      </form>
      
    </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />
<script src="http://code.jquery.com/jquery-1.9.1.js"></script>
<script src="http://code.jquery.com/ui/1.10.1/jquery-ui.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/añadirPregunta.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
 </head>



<!---->
