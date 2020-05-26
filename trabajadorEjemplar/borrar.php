<?php
  session_start();
  $user = $_SESSION['user'];
  if(!isset($user))
  {
    header("location: Login.php");
  }
  include_once 'datos.php';

    $resultado = deshabilitar();
    if($resultado){
        header("location: index.php");
    }
  

 ?>
