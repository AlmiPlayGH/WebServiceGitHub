<?php
  session_start();
  include_once 'datos.php';
  
  $login = checkUser($_POST['user'], $_POST['pass']);
  
  if($login !== -1)
  {
    $_SESSION['user'] = $_POST['user'];
    $_SESSION['id_rol'] = $login;
   
    header("location: portada.php");
  } else
  {
   header("location: index.php");
  }

 ?>
