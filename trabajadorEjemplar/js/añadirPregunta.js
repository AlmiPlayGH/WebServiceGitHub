var nuevoID;
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
  var idAsig= -1;
    //CARGAR COMBO
  //LLAMO A AJAX
  $("#asig").on('change', function(){
    idAsig = $(this).val();
  });
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

    //COGER MAXID
    try
    { 
      $.ajax({
        url: "http://62.117.137.221:8181/api/getIdValido",
        data:{
        },
        type: "get",
        async: true,
        contentType: "application/javascript",
        dataType: "json",                  
        success: function(msg) {             
            console.log(msg.data); 
           // buscarID(msg);
           nuevoID =msg.data;
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

       //LA PIJADA DE LA IMAGEN
       
        var name = document.getElementById("file").files[0].name;
        var gato = "imagenes/gato.jpg";
        var form_data = new FormData();
        var ext = name.split('.').pop().toLowerCase();
        if(jQuery.inArray(ext, ['gif','png','jpg','jpeg']) == -1) 
        {
         alert("Invalid Image File");
        }
        var oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("file").files[0]);
        var f = document.getElementById("file").files[0];
        var fsize = f.size||f.fileSize;
        if(fsize > 2000000)
        {
         alert("Image File Size is very big");
        }
        else
        {
         form_data.append("file", document.getElementById('file').files[0]);
        console.log(document.getElementById('file').files[0]);
         $.ajax({
          url:"http://62.117.137.221:8181/uploadImagen/"+nuevoID+".jpg",
          method:"POST",
          data: form_data,
          contentType: false,
          cache: false,
          processData: false,
          success:function(response)
          {
           //$('#uploaded_image').html(response);
           console.log(response);
          },
          error: function(error) { console.log(error); }
        
         });
        }
      
   
      

       console.log($("input")[7].value);
     //LLAMADA A AJAX
        try
        { 
            $.ajax({
            url: "http://62.117.137.221:8181/api/preguntas",
            data:{
                _id: nuevoID,
                pregunta: $("input")[0].value,
                respuestas: [
                [$("input")[1].value, array[0]],
                [$("input")[2].value, array[1]],
                [$("input")[3].value, array[2]],
                [$("input")[4].value, array[3]]
                ],
                pista: $("input")[6].value,
                texto: $("input")[7].value,
                tipoPregunta: idAsig
            },
            type: "POST",
            //async: true,
            //contentType: "application/javascript",
            dataType: "json",                  
            success: function(msg) {             
                //webServiceResult(msg); 
                console.log(msg);
                alert("Pregunta añadida");
                window.location.replace("editarPreguntas.php");
            },
            error: function(jqXmlHttpRequest, textStatus, errorThrown) { console.log(errorThrown); }
            });
        } 
        catch (err) 
        {
            alert(err);
        }
      //console.log($("input")[10].value);
   });


});