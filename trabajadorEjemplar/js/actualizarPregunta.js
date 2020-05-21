var ID;

function rellenarForm(cosa){
    console.log(cosa);
    ID=cosa.data._id;
    var htmlPregunta = "";
    htmlPregunta = cosa.data.pregunta;
    $("#Pregunta").html(htmlPregunta);

    var htmlA= "";
    htmlA = cosa.data.respuestas[0][0];
    $("#A").html(htmlA);

    var htmlB= "";
    htmlB = cosa.data.respuestas[1][0];
    $("#B").html(htmlB);

    var htmlC= "";
    htmlC = cosa.data.respuestas[2][0];
    $("#C").html(htmlC);

    var htmlD= "";
    htmlD = cosa.data.respuestas[3][0];
    $("#D").html(htmlD);

    var htmlPista= "";
    htmlPista = cosa.data.pista;
    $("#Pista").html(htmlPista);

    var htmlTexto= "";
    htmlTexto = cosa.data.texto;
    $("#Descripcion").html(htmlTexto);

    var htmlImagen= "";
    htmlImagen = cosa.data.imagen;
    $("#file").html(htmlImagen);

    var sizeArray = cosa.data.respuestas.length
    
    for(var i = 0; i < sizeArray; i++)
    {
        
        if (cosa.data.respuestas[i][1]==1){
            $("input")[i+1].checked = true;
            console.log("Selec");
        }
        console.log("No selec");
    }
    

}
$(document).ready(function()
{
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('=') + 1);
    console.log(id);

    //LLAMADA A AJAX
    try
    { 
      $.ajax({
        url: "http://62.117.137.221:8181/api/preguntas/"+id,
        data:{},
        type: "get",
        async: true,
        contentType: "application/javascript",
        dataType: "json",                  
        success: function(msg) {             
            rellenarForm(msg); 
        },
        error: function(jqXmlHttpRequest, textStatus, errorThrown) { console.log(errorThrown); }
      });
    } 
    catch (err) 
    {
      alert(err);
    }

    $("#cargar").click(function(contadorFilas)
   {
    var array=[];
       
    $(".check").each(function(cont){
    
     if ($(this).val()== ""){
         console.log("vacio");
         array[cont] = $(this).val();
       }else if ($(this).prop('checked')){
           //var cosas = $(this).val();
           array[cont] = 1;
           
       } else {
          // var Nocosas = $(this).val();
           //$(this).value = incorrecta;
           array[cont] = 0;
       }
       //console.log(cont+" "+array[cont]);
    });

        //LLAMADA A AJAX
        try
        { 
            $.ajax({
            url: "http://62.117.137.221:8181/api/preguntas/"+ID,
            data:{
                _id: ID,
                pregunta: $("textarea")[0].value,
                respuestas: [
                [$("textarea")[1].value, array[0]],
                [$("textarea")[2].value, array[1]],
                [$("textarea")[3].value, array[2]],
                [$("textarea")[4].value, array[3]]
                ],
                imagen: $("input")[0].value,
                pista: $("textarea")[5].value,
                texto: $("textarea")[6].value
            },
            type: "PUT",
            //async: true,
            //contentType: "application/javascript",
            dataType: "json",                  
            success: function(msg) {             
                //webServiceResult(msg); 
                console.log(msg);
                alert("Pregunta modificada");
                window.location.replace("editarPreguntas.php");
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