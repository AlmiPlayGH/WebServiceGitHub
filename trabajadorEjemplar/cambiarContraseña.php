<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/contraseña.css">
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
    <a class = "volver" href="editarPreguntas.php">Volver</a>
     <h2>Contraseña</h2>
     <form id="formulario" action="actualizarContraseña.php" method= "post">
      
      <?php
          $user = $_SESSION['user'];
          include_once 'datos.php';
          $datos = getUsuarioDatos($user);
       
       echo '<label for="pass">Contraseña</label>';
       echo '<input type="password" id="pass" name="pass" "/><br>';

       echo '<label for="nombre">Nueva contraseña</label>';
       echo '<input type="password" id="contra" name="contra" /><br>';

       echo '<label for="apellido1">Repita la contraseña</label>';
       echo '<input type="password" id="repassword" name="repassword" /><br>';

        ?>
          <input type="submit">
      </form>
      
    </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/validarNuevaContraseña.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />

 </head>



<!---->
