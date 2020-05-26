<?php
  session_start();
  $user = $_SESSION['user'];
  if(!isset($user))
  {
    header("location: Login.php");
  }
  
  include_once "datos.php";
  $resultado = actualizarContraseña($_POST['contra'], $_SESSION['user']);

  if(!$resultado){
    var_dump($_POST['user']);
  }else{
    header("location: modificarUsuarios.php");
  }
  
 ?>