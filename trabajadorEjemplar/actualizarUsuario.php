<?php
  session_start();
  $user = $_SESSION['user'];
  if(!isset($user))
  {
    header("location: Login.php");
  }
  var_dump($_POST['fechaNaci']);
  include_once "datos.php";
  $resultado = actualizarUsuario($_POST['user'], $_POST['nombre'], $_POST['apellido1'], $_POST['apellido2'], $_POST['email'], $_POST['fechaNaci'], $_POST['idPas']);
  
  header("location: modificarUsuarios.php");
 ?>