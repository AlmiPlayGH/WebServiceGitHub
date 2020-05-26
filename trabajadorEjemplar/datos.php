<?php

function conectarBBDD()
 {
   $mysqli = new mysqli("62.117.137.221", "almi", "Almi123", "almi", "3306");

   $mysqli -> set_charset("utf8");
   if($mysqli->connect_errorno)
   {
     echo "Fallo en la conexión: ".$mysqli->connect_errorno;
   }
   return $mysqli;
 }

 function checkUser($user, $pass)
  {
    $mysqli = conectarBBDD();
    $sql = "SELECT nombre, id_rol FROM Usuarios WHERE usuario = ? AND pass = ? AND Habilitado=1";
	
	$sentencia = $mysqli -> prepare($sql);
	//var_dump($mysqli);
    if(!$sentencia)
    {
      echo "fallo al preparar";
    }
    $asignar = $sentencia->bind_param("ss", $user, $pass);
    if(!$asignar)
    {
      echo "fallo al asignar";
    }

    $ejecucion = $sentencia->execute();
    if(!$ejecucion)
    {
      echo "fallo al ejecutar";
    }

    $nombre = "";
    $idRol =-1;
    $vincular = $sentencia->bind_result($nombre, $idRol);
    if(!$vincular)
    {
      echo "fallo al vincular";
    }
    $id_Rol=-1;
    if($sentencia->fetch())
    {
		$id_Rol = $idRol;
    }
    /*$numUsuarios = 0;
    if($sentencia->fetch())
    {
      $numUsuarios++;
    }

/*
    if($numUsuarios == 0)
    {
      return false;
    } else {
      return true;
    }
    */
    return $id_Rol;
  }

  function actualizarUsuario($user, $nombre, $apellido1, $apellido2, $email, $fechaNaci, $idPais){
    $mysqli = conectarBBDD();
    $sql = "UPDATE Usuarios SET usuario = ?, nombre = ?, apellido1 = ?, apellido2 = ?, email = ?, fecha_nacimiento = ?, id_pais=? WHERE usuario = ?";
    $sentencia = $mysqli->prepare($sql);

    if(!$sentencia)
    {
      echo "ERROR al preparar la actualizar";
    }
    $bind = $sentencia->bind_param("ssssssis", $user, $nombre, $apellido1, $apellido2, $email, $fechaNaci, $idPais, $user);
    if(!$bind)
    {
      echo "ERROR al asociar parámetros";
    }
    $resultado = $sentencia->execute();

    $mysqli->close();
    return $resultado;
  }

  function actualizarContraseña($pass, $user){
    $mysqli = conectarBBDD();
    $sql = "UPDATE Usuarios SET pass = ? WHERE usuario = ?";
    $sentencia = $mysqli->prepare($sql);
    var_dump($sentencia);
    if(!$sentencia)
    {
      echo "ERROR al preparar la actualizar";
    }
    $bind = $sentencia->bind_param("ss", $pass, $user);
    if(!$bind)
    {
      echo "ERROR al asociar parámetros";
    }
    $resultado = $sentencia->execute();

    $mysqli->close();
    return $resultado;
  }

  function getUsuarioDatos($user){
    $mysqli = conectarBBDD();
    //HACER INER JOIN
    $sql = "SELECT pass, Usuarios.nombre, apellido1, apellido2, email, fecha_nacimiento, Usuarios.id_pais, paises.nombre FROM Usuarios INNER JOIN paises ON Usuarios.id_pais=paises.id_pais WHERE Usuarios.usuario=?";

    $sentencia = $mysqli->prepare($sql);

    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->errorno;
    }
    $asignar = $sentencia->bind_param("s", $user);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $pass = "";
    $nombre = "";
    $apellido1 = "";
    $apellido2 = "";
    $email = "";
    $fechaNaci = "";
    $idPais = -1;
    $pais = "";

    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($pass, $nombre, $apellido1, $apellido2, $email, $fechaNaci, $idPais, $pais);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }

    if($sentencia->fetch())
    {
      $dato = array(
        "pass"=>$pass,
        "nombre"=>$nombre,
        "apellido1"=>$apellido1,
        "apellido2"=>$apellido2,
        "email"=>$email,
        "fechaNaci"=>$fechaNaci,
        "idPais"=>$idPais,
        "pais"=>$pais
      );
       
    }
    $sentencia->close();
    $mysqli->close();

    return $dato;
  }

  function insertarUsuario($user, $name, $apellido1, $apellido2, $email, $fechaNaci, $password, $idPais)
  {
    $mysqli = conectarBBDD();
    $sql = "INSERT INTO Usuarios(usuario, nombre, apellido1, apellido2, email, fecha_nacimiento, pass, id_rol, id_pais, Habilitado) VALUES (?, ?, ?, ?, ?, ?, ?, 2, ?, 1)";
    $sentencia = $mysqli->prepare($sql);

    if(!$sentencia)
    {
      echo "ERROR al preparar la insert";
    }
    $bind = $sentencia->bind_param("sssssssi",$user, $name, $apellido1, $apellido2, $email, $fechaNaci, $password, $idPais);
    if(!$bind)
    {
      echo "ERROR al asociar parámetros";
    }
    $resultado = $sentencia->execute();

    $mysqli->close();
    return $resultado;
  }

  function getUsuarios()
  {
    $mysqli = conectarBBDD();

    $sql = "SELECT usuario FROM Usuarios";

    $sentencia = $mysqli->prepare($sql);

      if(!$sentencia)
      {
        echo "Fallo en la preparación: ".$mysqli->errorno;
      }

      $ejecucion = $sentencia->execute();
      if(!$ejecucion)
      {
        echo "Fallo en la ejecucion".$mysqli->errno;
      }

      $nombre;
      $vincular = $sentencia->bind_result($nombre);

      if(!$vincular)
      {
        echo "Fallo al asociar parámetros ".$mysqli->errno;
      }

      $usuarios = array();
      while($sentencia->fetch())
      {
        $cat = array();

        $cat["user"] = $nombre;
        $usuarios[] = $cat;
      }

      $mysqli->close();

    return $usuarios;
  }

  

  function getTop()
  {
    $mysqli = conectarBBDD();
    //HACER INER JOIN
    $sql = "SELECT Usuarios.usuario, puntuacion, fecha FROM Puntuaciones INNER JOIN Usuarios ON Usuarios.id_usuario=Puntuaciones.id_usuario WHERE habilitado=1 ORDER BY Puntuaciones.puntuacion desc LIMIT 10";

    $sentencia = $mysqli->prepare($sql);

    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->errorno;
    }
   
    $usuario = "";
    $puntuacion = 0;
    $fecha = "";
    

    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($usuario, $puntuacion, $fecha);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }

    $noticia = array();
    while($sentencia->fetch())
    {
      $noticia = array(
        "usuario"=>$usuario,
        "puntuacion"=>$puntuacion,
        "fecha"=>$fecha

      );
      $noticias[] = $noticia;
    }
    $sentencia->close();
    $mysqli->close();
    return $noticias;
  }


  function getPuntuacion($usuario)
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT Puntuaciones.puntuacion, Puntuaciones.fecha, Puntuaciones.correctas, Puntuaciones.tiempo FROM Puntuaciones INNER JOIN Usuarios ON Usuarios.id_usuario=Puntuaciones.id_usuario WHERE Usuarios.usuario = ? ORDER BY Puntuaciones.fecha ASC LIMIT 10";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->errorno;
    }
    $asignar = $sentencia->bind_param("s", $usuario);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $puntuacion = "";
    $fecha = "";
    $correctas = -1;
    $tiempo = -1;

    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($puntuacion, $fecha, $correctas, $tiempo);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }

    $noticias = array();
    while($sentencia->fetch())
    {
      $noticia = array(
        "puntuacion"=>$puntuacion,
        "fecha"=>$fecha,
        "correctas"=>$correctas,
        "tiempo"=>$tiempo
      );
       $noticias[] = $noticia;
    }

    $mysqli->close();
    return $noticias;
  }

  function getPuntuacionTotal($usuario)
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT Puntuaciones.puntuacion, Puntuaciones.fecha, Puntuaciones.correctas, Puntuaciones.tiempo FROM Puntuaciones INNER JOIN Usuarios ON Usuarios.id_usuario=Puntuaciones.id_usuario WHERE Usuarios.usuario = ? ORDER BY Puntuaciones.fecha ASC";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->errorno;
    }
    $asignar = $sentencia->bind_param("s", $usuario);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $puntuacion = "";
    $fecha = "";
    $correctas = -1;
    $tiempo = -1;

    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($puntuacion, $fecha, $correctas, $tiempo);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }

    $noticias = array();
    while($sentencia->fetch())
    {
      $noticia = array(
        "puntuacion"=>$puntuacion,
        "fecha"=>$fecha,
        "correctas"=>$correctas,
        "tiempo"=>$tiempo
      );
       $noticias[] = $noticia;
    }

    $mysqli->close();
    return $noticias;
  }
  
  function getMediaPuntuacion($usuario)
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT MAX(mediaPuntuaciones(?)) From Rol";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->error;
    }
    $asignar = $sentencia->bind_param("s", $usuario);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $puntuacion = "";
   
    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($puntuacion);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }
    $puntos = array();
    if($sentencia->fetch())
    {
      $sentencia->close();
      $mysqli->close();
      return $puntuacion;
    }
   
  }

  function getMediaTiempo($usuario)
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT MAX(mediaTiempos(?)) From Rol";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->error;
    }
    $asignar = $sentencia->bind_param("s", $usuario);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $tiempos = "";
   
    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($tiempos);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }
    
    if($sentencia->fetch())
    {
      $sentencia->close();
      $mysqli->close();
      return $tiempos;
    }
   
  }

  function getMediaCorrectas($usuario)
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT MAX(mediaCorrectas(?)) From Rol";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->error;
    }
    $asignar = $sentencia->bind_param("s", $usuario);
    if(!$asignar)
    {
      echo "Fallo en la asignación: ".$mysqli->errorno;
    }

    $correctas = "";
   
    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($correctas);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }
    
    if($sentencia->fetch())
    {
      $sentencia->close();
      $mysqli->close();
      return $correctas;
    }
   
  }

  function getPaisCombo(){
    $mysqli = conectarBBDD();
    
    $sql = "SELECT id_pais, nombre FROM paises ORDER BY paises.id_pais ASC";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->errorno;
    }
   
    $idPais = -1;
    $nombre = "";
    

    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($idPais, $nombre);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }

    $noticias = array();
    while($sentencia->fetch())
    {
      $noticia = array(
        "idPais"=>$idPais,
        "nombre"=>$nombre
      );
       $noticias[] = $noticia;
    }

    $mysqli->close();
    return $noticias;
  }

  function getPais()
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT MediaPuntuacionesPorPais()";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->error;
    }
    
    $tiempos;
   
    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($tiempos);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }
    
    if($sentencia->fetch())
    {
      $sentencia->close();
      $mysqli->close();
      return $tiempos;
    }  	
  }

  function getEdades()
  {
    $mysqli = conectarBBDD();
    
    $sql = "SELECT mediaPorEdades()";

    $sentencia = $mysqli->prepare($sql);
    
    if(!$sentencia)
    {
      echo "Fallo en la preparación: ".$mysqli->error;
    }
    
    $tiempos;
   
    $ejecucion = $sentencia->execute();
    $vincular = $sentencia->bind_result($tiempos);

    if(!$vincular)
    {
      echo "Fallo al asociar resultados: ".$mysqli->errorno;
    }
    
    if($sentencia->fetch())
    {
      $sentencia->close();
      $mysqli->close();
      return $tiempos;
    }  	
  }

  //DESHABILITAR
  function deshabilitar(){
    session_start();
    $user = $_SESSION['user'];
    $mysqli = conectarBBDD();
    $sql = "UPDATE Usuarios SET Habilitado = 0 WHERE usuario = ?";
    $sentencia = $mysqli->prepare($sql);

    if(!$sentencia)
    {
      echo "ERROR al preparar la actualizar";
    }
    $bind = $sentencia->bind_param("s", $user);
    if(!$bind)
    {
      echo "ERROR al asociar parámetros";
    }
    $resultado = $sentencia->execute();

    $mysqli->close();
    return $resultado;
  }
?>
