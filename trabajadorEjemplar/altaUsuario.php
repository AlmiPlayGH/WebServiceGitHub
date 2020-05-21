<?php

  $user = $_POST["user"];
  $name = $_POST["nombre"];
  $apellido1 = $_POST["apellido1"];
  $apellido2 = $_POST["apellido2"];
  $email = $_POST["email"];
  $fechaNaci = $_POST["fecha_nacimiento"];
  $password = $_POST["pass"];

  include_once "datos.php";
  $resultado = insertarUsuario($user, $name, $apellido1, $apellido2, $email, $fechaNaci,$password);
    var_dump($resultado);
 if($resultado)
  {
    header("location: index.php");
  } else {
   header("location: registro.php");
  }
 ?>
