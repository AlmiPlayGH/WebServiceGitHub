<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Quien quiere ser un buen empleado</title>
    <link href="https://fonts.googleapis.com/css?family=Titillium+Web&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="css/registro.css">
  </head>
  <body>
  
    <div id="cuerpo">
    <a class = "volver" href="index.php">Volver</a>

    <img src="imagenes/plato.jpg" alt="Foto Logo" class="plato">
    <img src="imagenes/logo.png" alt="Foto Logo" class="logo">

    <form id="formulario" action="altaUsuario.php" method="post">
        <div id="infoWeb" class="trozoFormulario">
          <h2>Información de la web</h2>
          <label for="user">Usuario</label>
          <input type="text" id="user" name="user" placeholder="Escriba su usuario"/><br>
          <label for="password">Contraseña</label>
          <input type="password" id="password" name="pass"/><br>
          <label for="repassword">Repetir Contraseña</label>
          <input type="password" id="repassword" name="repassword"/><br>
        </div>
        <div id="infoPersonal" class="trozoFormulario">
          <h2>Información personal</h2>
          <label for="name">Nombre</label>
          <input type="text" id="name" name="nombre" placeholder="Escriba su nombre"/><br>
          <label for="ap1">Apellido 1</label>
          <input type="text" id="ap1" name="apellido1"/><br>
          <label for="ap1">Apellido 2</label>
          <input type="text" id="ap1" name="apellido2"/><br>
          <label for="email">E-Mail</label>
          <input type="email" id="email" name="email"/><br>
          <label for="fecha">Fecha nacimiento</label>
          <input type="date" id="fecha" name="fecha_nacimiento"/><br>
          <select id="asig" name="idPas">
          <option value=0>-- Seleccione una país --</option>
          </select>
        </div>
        
        <input type="button" id="cambiarFormulario" value="Mostrar Siguiente" />
        <input id="btnEnviar" type="submit">
      </form>
    
    </div>

  </body>
</html>
<script src="js/jquery-3.4.1.min.js"></script>
<script src="js/utilidades.js"></script>
<script src="js/validarForm.js"></script>









<!---->
