var iid;
// Procesar resultados del webservice
function webServiceResult(da)
{ 
   
    var sizeArray = da.data.length;
    var htmlPreguntas = "";
    htmlPreguntas =  '<tr class="barra">'+
                "<th class='ID'>ID</th>"+
                "<th class='Pregunta'>PREGUNTA</th>"+
                "<th class='Respuestas'>RESPUESTAS</th>"+
                "<th class='Texto'>TEXTO</th>"+
                "<th class='Pista'>PISTA</th>"+
                " </tr>";
    for(var i = 0; i < sizeArray; i++)
    {
        if(i%2==0){
            htmlPreguntas +=   
                    "<tr class='impar'>"+
                    "<td id = 'id' class='ID tooltip' onclick='confirmacion("+da.data[i]._id+")'>"+da.data[i]._id+
                    '<span class="tooltiptext">Editar o borrar preguntas</span>'+
                    "</td>"+
                    "<td class='Pregunta'>"+da.data[i].pregunta+"</td>"+
                    "<td class='Respuestas'>"+da.data[i].respuestas+"</td>"+
                    "<td class='Texto'>"+da.data[i].texto+"</td>"+
                    "<td class='Pista'>"+da.data[i].pista+"</td>"+
                    "</tr>";
        } else {
            htmlPreguntas +=   
                    "<tr class='par'>"+
                    "<td class='ID tooltip' onclick='confirmacion("+da.data[i]._id+")'>"+da.data[i]._id+
                    '<span class="tooltiptext">Editar o borrar preguntas</span>'+
                    "</td>"+
                    "<td class='Pregunta'>"+da.data[i].pregunta+"</td>"+
                    "<td class='Respuestas'>"+da.data[i].respuestas+"</td>"+
                    "<td class='Texto'>"+da.data[i].texto+"</td>"+
                    "<td class='Pista'>"+da.data[i].pista+"</td>"+
                    "</tr>";
        }
        
        $("#tablita").html(htmlPreguntas);
        
    }
    
}
//FUNCION BORRAR NOTICIA
function borrarNoti(idPre){
  
  //LLAMADA A AJAX
  try
  { 
    $.ajax({
      url: "http://62.117.137.221:8181/api/preguntas/"+idPre,
      data:{},
      type: "delete",
      async: true,
      contentType: "application/javascript",
      dataType: "json",                  
      success: function(msg) {             
          console.log(msg); 
      },
      error: function(jqXmlHttpRequest, textStatus, errorThrown) { console.log(errorThrown); }
    });
  } 
  catch (err) 
  {
    alert(err);
  }
  //BORRAR IMAGEN
  $.ajax({
    url:"http://62.117.137.221:8181/api/preguntas/imagen/"+idPre+".jpg",
    method:"DELETE",
    data: {},
   // contentType: false,
    //cache: false,
    processData: false,
    success:function(response)
    {
     console.log(response);
     window.location.replace("editarPreguntas.php");
    },
    error: function(error) { console.log(error); }
  
   });

}

function confirmacion(idP){
 
    Confirm('Editar o borrar', '¿Qué desea hacer?', 'Editar', 'Borrar', "actualizarPregunta.php", idP ); /*change*/

    return false;
  
};


 //NOTIFICACION
 function Confirm(title, msg, $true, $false, $link, $idPregunta) { /*change*/

  var $content =  "<div class='dialog-ovelay'>" +
                  "<div class='dialog'><header>" +
                   " <h5> " + title + " </h5> " +
                   "<i class='fa fa-close'></i>" +
               "</header>" +
               "<div class='dialog-msg'>" +
                   " <p> " + msg + " </p> " +
               "</div>" +
               "<footer>" +
                   "<div class='controls'>" +
                       " <button class='button button-danger doAction'>" + $true + "</button>" +
                       " <button class='button button-default borrar '>" + $false + "</button> " +
                       " <button class='button cancelar cancelAction'>Cancelar</button> " +
                   "</div>" +
               "</footer>" +
            "</div>" +
          "</div>";
   $('#preguntas').prepend($content);
$('.doAction').click(function () {
  window.location.replace("actualizarPregunta.php?idPregunta="+ $idPregunta+"");
 // window.open($link, "_blank"); /*new*/
  $(this).parents('.dialog-ovelay').fadeOut(500, function () {
    $(this).remove();
  });
});
$('.borrar').click(function () {
  console.log($idPregunta);
  if (window.confirm("¿Seguro que quiere borrar la noticia?"))
  {
    //console.log("borrada");
    borrarNoti($idPregunta);
    $(this).parents('.dialog-ovelay').fadeOut(500, function () {
      $(this).remove();
    });
    
  }
});

$('.cancelAction, .fa-close').click(function () {
  $(this).parents('.dialog-ovelay').fadeOut(500, function () {
    $(this).remove();
  });
});

}

function rellenarCombo(asig){
  var htmlCombo = "";
  var sizeArray = asig.data.length;
  htmlCombo = "<option value=0>-- Seleccione una asignatura --</option>";
  for(var i = 0; i < sizeArray; i++)
    {
      htmlCombo +=" <option value="+asig.data[i]._id+">"+asig.data[i].nombre+"</option>"
    }
    $("#asig").html(htmlCombo);
}

$(document).ready(function()
{
  //CARGAR COMBO
  //LLAMO A AJAX
  try
      { 
        $.ajax({
          url: "http://62.117.137.221:8181/api/asignaturas",
          data:{},
          type: "get",
          async: true,
          contentType: "application/javascript",
          dataType: "json",                  
          success: function(msg) {             
              rellenarCombo(msg); 
          },
          error: function(jqXmlHttpRequest, textStatus, errorThrown) { console.log(errorThrown); }
        });
      } 
      catch (err) 
      {
        alert(err);
      }


  //FLECHITA DE IR ARRIBA
  $('.ir-arriba').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-arriba').slideDown(300);
		} else {
			$('.ir-arriba').slideUp(300);
		}
	});


    //FINTRO DE BUSQUEDA
    $("#fil").on('change textinput input',function()
  {
    var textoFiltro = $("#fil").val();

    $("#tablita tr").each(function(contadorFilas)
    {
      $(this).children("td").each(function(contadorColum)
      {
        var contenido = $(this).text().toLowerCase();
        
          
            if (!contenido.includes(textoFiltro.toLowerCase()))
            {
              $(this).closest("tr").hide();
            } else
            {
              $(this).closest("tr").show();
            }
            
        });
      });
    });

   //FILTRO DE LOS CHECKS
   $("#cargar").click(function(contadorFilas)
   {
       
    $("#group").children().each(function(){
        if ($(this).val()== ""){
          console.log("vacio")
        }else if ($(this).prop('checked')){
            var cosas = $(this).val();
            $("."+cosas).show();
            //console.log(cosas);
        } else {
            var Nocosas = $(this).val();
            $("."+Nocosas).hide();
            //console.log("No sele: "+Nocosas)
        }
       
    });

    var contenido = $(this).text().toLowerCase();
    var seleccionada = $("input:checked" ).val();
   // console.log($("input:checked" ).val());
   });

   //QUITAR
   $("#quitar").click(function(contadorFilas)
   {
   
    $("#group").children().each(function(){
      var cosas = $(this).val();

      if ($(this).val()== ""){
        console.log("vacio")
      }else if ($(this).prop('checked')){
          var cosas = $(this).val();
          $("."+cosas).show();
          $(this).prop("checked", false);
          //console.log(cosas);
      } else {
          var Nocosas = $(this).val();
          $("."+cosas).show();
          //console.log("No sele: "+Nocosas)
      }
    
      
   });
  });

    $("#asig").on('change', function(){
      console.log($(this).val());
      var idAsig = $(this).val();

      //LLAMADA A AJAX
      try
      { 
        $.ajax({
          url: "http://62.117.137.221:8181/api/preguntasTipo/"+idAsig,
          data:{},
          type: "get",
          async: true,
          contentType: "application/javascript",
          dataType: "json",                  
          success: function(msg) {             
              webServiceResult(msg); 
          },
          error: function(jqXmlHttpRequest, textStatus, errorThrown) { console.log(errorThrown); }
        });
      } 
      catch (err) 
      {
        alert(err);
      }
      

    });
      
});