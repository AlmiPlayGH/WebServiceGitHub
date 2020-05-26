function comprobarContraseña(contraseña){
    var escrita =  $('#pass').val();
    
    if (escrita == contraseña){
        console.log("bien");
        $("#pass").css('background-color', 'white');
    } else {
        alert("Contraseña incorrecta");
        $("#pass").css('background-color', 'red');
    }
}

$(document).ready(function()
{
    $('#pass').on('change', function()
    {
      var parametros = {funcion: "datosUsuario"};
  
      $.ajax(
        {
          data:parametros,
          url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
          type:'post',
          success:function(response)
          {
           
            arrayUsuarios = $.parseJSON(response);
            comprobarContraseña(arrayUsuarios.pass);
            console.log(arrayUsuarios);
          },
          error: function(error)
          {
            alert("Se ha producido un error");
           console.log(error)
          }
        }
      );
    });

  var formularioValido = true;
  var mensajeError = "";
  
  $('#repassword').on('change textinput input', function()
  {
    mensajeError = "";
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if(password != repassword)
    {
      formularioValido = false;
      mensajeError += "Las contraseñas no coinciden\n";
      $("#repassword").css('background-color', 'red');
    } else
    {
        $("#repassword").css('background-color', 'white');
        formularioValido = true;
    }
  });

  $('#btnEnviar').click(function(event)
  {
      mensajeError = "";
      var email = $("#email").val();
      var indice = email.indexOf("@");
      var pass = $("#password").val();
      var user = $("#user").val();

      var passValida = validarPassword(pass, user);
      if(!passValida)
      {
        mensajeError += "La contraseña debe tener una mayúscula, un número y al menos 7 caracteres";
        formularioValido = false;
        $("#password").css('background-color', 'red');
      } else
      {
        var backgroundColor = $("#password").css("background-color");
        $("#password").css('background-color', backgroundColor);
        formularioValido = true;
      }

      if(indice == -1)
      {
        formularioValido = false;
        mensajeError += "El email no es válido\n";
        $("#email").css('background-color', 'red');
      } else
      {
       
          var backgroundColor = $("#user").css("background-color");
          $("#email").css('background-color', backgroundColor);
      }


      if( formularioValido == false)
      {
        alert(mensajeError);
        console.log(mensajeError);
        event.preventDefault();
      }

  });

  $('#cambiarFormulario').click(function()
  {
    var div = $(".logo");
    if ($('#infoPersonal').is(':hidden'))
    {
      $('#infoWeb').fadeOut( function()
      {
        $('#infoPersonal').fadeIn();
        //$(".logo").css('-webkit-transform','rotate(180deg)');
        div.animate({rotate: '180deg'}, "slow");
      });

      $('#cambiarFormulario').val('Mostrar anterior');

    }
    else
    {
      $('#infoWeb').fadeIn();
      $('#infoPersonal').fadeOut(5);
      $('#cambiarFormulario').val('Mostrar siguiente');
       // $(".logo").css('-webkit-transform','rotate(0deg)');
      div.animate({rotate: '0deg'}, "slow");
    }

  });

});
