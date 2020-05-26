function llenarCombo(array){
    var htmlCombo = "";
    var sizeArray = array.length;
    htmlCombo = "<option value=0>-- Seleccione una pais --</option>";
    for(var i = 0; i < sizeArray; i++)
      {
        htmlCombo +=" <option value="+array[i].idPais+">"+array[i].nombre+"</option>"
      }
      $("#asig").html(htmlCombo);
      
     
  }

  function usuario(array){
    document.getElementById("asig").selectedIndex = array.idPais;
  }

 
  
$(document).ready(function()
{
  $("#eliminar").on('click', function(){

  if (window.confirm("¿Seguro que quiere borrar la cuenta?"))
    {
      window.open("borrar.php", "Thanks for Visiting!");
    }
  });


  var parametros = {funcion: "paisesCombo"};

  $.ajax(
    {
      data:parametros,
      url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
      type:'post',
      success:function(response)
      {
       //console.log(response);
       arrayPais = $.parseJSON(response);
      // console.log(arrayPais[1].idPais);
       llenarCombo(arrayPais);

      },
      error: function(error)
      {
        alert("Se ha producido un error");
       console.log(error)
      }
    }
  );

  var parametros = {funcion: "datosUsuario"};

  $.ajax(
    {
      data:parametros,
      url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
      type:'post',
      success:function(response)
      {
       //console.log(response);
       usu = $.parseJSON(response);
      // console.log(arrayPais[1].idPais);
       usuario(usu);

      },
      error: function(error)
      {
        alert("Se ha producido un error");
       console.log(error)
      }
    }
  );
});

function confirmacion(usuario){

  if (window.confirm("¿Seguro que quiere borrar la cuenta?"))
  {
    window.open("borrar.php?user='"+usuario+"'", "Thanks for Visiting!");
  }
}