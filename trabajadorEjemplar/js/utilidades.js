function validarPassword(pass, user)
{
  var hayMayuscula = false;
  var hayNumero = false;
  var esLarga = false;

  for(var i = 0; i < pass.length; i++)
  {
    if(/[0-9]/.test(pass.charAt(i)))
    {
      hayNumero = true;
    } else if(pass.charAt(i) == pass.charAt(i).toUpperCase())
    {
      hayMayuscula = true;
    }

  }

  if(pass.length > 7)
  {
    esLarga = true;
  }

  if(!hayMayuscula || !hayNumero || !esLarga)
  {
    return false;
  } else
  {
    return true;
  }

}
