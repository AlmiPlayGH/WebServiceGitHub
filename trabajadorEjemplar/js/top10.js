
function llenarTabla(Top10){
  var sizeArray = Top10.length;
  var htmlTop = "";
  htmlTop =  '<tr class="barra">'+
              "<th>NUMERO</th>"+
              "<th>NOMBRE</th>"+
              "<th>PUNTUACION</th>"+
              "<th>FECHA</th>"+
              " </tr>";
  for(var i = 0; i < sizeArray; i++)
  {
    if(i%2==0){
      htmlTop +=   
                  "<tr class='impar'>"+
                  "<td>"+(i+1)+"</td>"+
                  "<td>"+Top10[i].usuario+"</td>"+
                  "<td>"+Top10[i].puntuacion+"</td>"+
                  "<td>"+Top10[i].fecha+"</td>"+
                  "</tr>";
    } else {
      htmlTop +=   
                  "<tr class='par'>"+
                  "<td>"+(i+1)+"</td>"+
                  "<td>"+Top10[i].usuario+"</td>"+
                  "<td>"+Top10[i].puntuacion+"</td>"+
                  "<td>"+Top10[i].fecha+"</td>"+
                  "</tr>";
    }
    
     $("#tablita").html(htmlTop);
  }
}

$(document).ready(function()
{

  var parametros = {funcion: "top10"};

    $.ajax(
      {
        data:parametros,
        url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
        type:'post',
        success:function(response)
        {
          arrayTop10 = $.parseJSON(response);
          llenarTabla(arrayTop10);
          console.log(arrayTop10);
        },
        error: function(error)
        {
          alert("Se ha producido un error");
         console.log(error)
        }
      }
    );
  


  var chas = false
  $(".guanteAbierto").click(function()
  {
    if(!chas){
      $(this).attr("src", "imagenes/guateChas.png");
      chas=true;
      aparecer(true);
    } else {
      $(this).attr("src", "imagenes/guanteAbierto.png");
      chas=false;
      aparecer(false);
    }
  });

});

function aparecer(va){
  if(va){
    $("#tablita tr").each(function(contadorFilas)
    {
      $(this).children("td").each(function(contadorColumnas)
      {
      
        $(this).fadeOut("2900");
      });
    });
  } else {
    $("#tablita tr").each(function(contadorFilas)
    {
      $(this).children("td").each(function(contadorColumnas)
      {

        $(this).fadeIn("slow");
      });
    });
  }

}

