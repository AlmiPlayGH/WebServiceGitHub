<?php

  $user = $_POST["user"];
  $name = $_POST["nombre"];
  $apellido1 = $_POST["apellido1"];
  $apellido2 = $_POST["apellido2"];
  $email = $_POST["email"];
  $fechaNaci = $_POST["fecha_nacimiento"];
  $password = $_POST["pass"];
  $idPais = $_POST["idPas"];
  
  include_once "datos.php";
  $resultado = insertarUsuario($user, $name, $apellido1, $apellido2, $email, $fechaNaci, $password, $idPais);
    
 if($resultado)
  {
   header("location: index.php");
  } else {
   // alert("Usuario NO insertado");
   header("location: registro.php");
  }
 ?>
