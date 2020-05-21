<?php

  if(isset($_SERVER['HTTP_ORIGIN']))
  {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 86400");
  }

  if($_SERVER['REQUEST_METHOD'] == 'OPTIONS')
  {
    if(isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
    {
      header("Access-Control-Allow-Methods: GET, POST,DELETE, PUT, OPTIONS");
    }
    if(isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
    {
      header("Access-Control-Allow-Headers:
                {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }
    exit(0);
  }


  header('Content-Type: application/JSON');

  $funcion = $_POST['funcion'];
  include 'datos.php';
  
  //pillar usuarios
  if($funcion == 'usuarios')
  {
    $user = getUsuarios();
    $userJson = json_encode($user, JSON_UNESCAPED_UNICODE);
    echo $userJson;
  }

  //TOP10
  if($funcion == 'top10')
  {
    $top = getTop();
    $topJson = json_encode($top, JSON_UNESCAPED_UNICODE);
    echo $topJson;
  }
  
  session_start();
  //PUNTUACION
  if($funcion == 'puntuacion')
  {
    $puntuacion = getPuntuacion($_SESSION['user']);
    $puntuacionJson = json_encode($puntuacion, JSON_UNESCAPED_UNICODE);
    echo $puntuacionJson;
  }

  //PAISES
  if($funcion == 'paises')
  {
    $paises = getPais();
    $paisesJson = json_encode($paises, JSON_UNESCAPED_UNICODE);
    echo $paises;
  }
 ?>
