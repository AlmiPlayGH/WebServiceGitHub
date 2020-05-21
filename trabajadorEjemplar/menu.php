
<?php
session_start();
include 'datos.php';
echo "<ul>";
echo "<li><a id='cerrar' href='cerrarSesion.php'>Cerrar Sesion</a></li>";
  echo "<li>";
    echo "<a id='Top10' href='top10.php'>Top10</a>";
  echo "</li>";
  if($_SESSION['id_rol']==1)
  {
    echo "<li><a class='estadísticas' href='editarPreguntas.php'>Editar preguntas</a></li>";
  } else {
    echo "<li><a id='estadísticas' href='estadisticas.php'>Mis Estadísticas</a></li>";
}
echo "</ul>";


?>
