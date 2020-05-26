<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/comon.css">
    <link rel="stylesheet" type="text/css" href="css/modificarUsuario.css">
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

     <h2>Perfil</h2>
     <a class = "volver" href="editarPreguntas.php">Volver</a><br><br><br>
      <a class = "volver" href="cambiarContraseña.php">Cambiar Contraseña</a><br><br><br>
     
     <?php
     $user = $_SESSION['user'];
     include_once 'datos.php';
     $datos = getUsuarioDatos($user);

       echo  "<a class = 'volver'  id='eliminar'>Eliminar cuenta</a>";
       echo '<form id="formulario" action="actualizarUsuario.php" method= "post">'; 
       echo '<h1>Datos Personales</h1>';
       echo '<label for="user">Usuario</label>';
       echo '<input type="text" id="user" name="user"  value="'.$user .'"/><br>';
       //echo '<label for="pass">Contraseña</label>';
       //echo '<input type="password" id="pass" name="pass" value="'.$datos['pass'].'"/><br>';
       echo '<label for="nombre">Nombre</label>';
       echo '<input type="text" id="nombre" name="nombre" value="'.$datos['nombre'].'"/><br>';
       echo '<label for="apellido1">Apellido 1</label>';
       echo '<input type="text" id="apellido1" name="apellido1" value="'.$datos['apellido1'].'"/><br>';
       echo '<label for="apellido2">Apellido 2</label>';
       echo '<input type="text" id="apellido2" name="apellido2" value="'.$datos['apellido2'].'" /><br>';
       echo '<label for="email">Email</label>';
       echo '<input type="text" id="email" name="email" value="'.$datos['email'].'"/><br>';
       echo '<label for="fecha_nacimiento">Fecha de nacimiento</label>';
       echo '<input type="date" id="fechaNaci" name="fechaNaci" value="'.$datos['fechaNaci'].'"/><br><br>';
       //echo '<label for="pais">Pais</label>';
       //echo '<input type="text" id="pais" name="pais" value="'.$datos['pais'].'"/>';
       echo '<select id="asig" name="idPas">';
       echo '<option value="'.$datos['idPais'].'">'.$datos['pais'].'</option>';
       echo '</select><br><br>';
      echo  '<input type="submit">';
       echo  "</form>";
        ?>
          
      
    </div>
 
  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/actualizarUsuario.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.10.1/themes/base/jquery-ui.css" />

 </head>




