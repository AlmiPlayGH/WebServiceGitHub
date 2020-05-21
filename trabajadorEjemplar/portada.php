<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Quien quiere ser un buen empleado</title>
  <link rel="stylesheet" type="text/css" href="css/portada.css">
</head>

<body  >

  <div id="cuerpo">
  <img src="imagenes/plato.jpg" alt="Foto Logo" class="atras">
    <img src="imagenes/logo.png" alt="Foto Logo" class="logo">
    <img src="imagenes/portada.png" width="900" height="550" class="menu">
    <h1 id="titulo">¿Qué desea hacer?</h1>
    <a class= "opciones" id="opciA" href="top10.php">Top10</a>
    
   <?php
    include 'datos.php';
    session_start();
    if(isset($_SESSION['user']))
    {
     echo "<a class='bienvenida'>Hola ".$_SESSION['user']."!!</a>";
     
    }
    if($_SESSION['id_rol']==1)
    {
      echo "<li><a class= 'opciones' id='opciB' class='editar' href='editarPreguntas.php'>Editar preguntas</a></li>";
    } else {
      echo "<li><a class= 'opciones' id='opciB' id='estadísticas' href='estadisticas.php'>Mis Estadísticas</a></li>";
    
    }
     ?>
    <a class= "opciones" id="opciC" href="cerrarSesion.php">Cerrar Sesión</a>  
  </div>
</body>
</html>
