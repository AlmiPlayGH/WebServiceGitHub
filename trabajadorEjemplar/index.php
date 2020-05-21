<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Quien quiere ser un buen empleado</title>
  <link rel="stylesheet" type="text/css" href="css/index.css">
</head>

<body background="imagenes/plato.jpg" >

  <div id="cuerpo">
    <form id="formulario" action="iniciarSesion.php" method="post">
      <h1>Login</h1>
      <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet"></a>
      <label for="user"></label>
      <input type="text" id="user" name="user" placeholder="Escriba su usuario">
      <br />
      <!--para espacios-->
      <label for="pastword"></label>
      <input type="password" id="password" name="pass" placeholder="Password">
      <br />
      <input type="submit" id="login" value="Login">
      <br />
      <a class="enlaceMenu" href="registro.php">Registro
        <link href="https://fonts.googleapis.com/css?family=Anton&display=swap" rel="stylesheet"></a>
    </form>
  </div>
</body>
