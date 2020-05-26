google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawDonut);

function drawRegionsMap(arrayPais) {

    var data =new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'Puntuacion');
    var sizeArray = arrayPais.length;
    for(var i = 0; i < sizeArray; i++)
    {
        data.addRow([arrayPais[i].pais, arrayPais[i].puntuacion]);
    }

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }

  function drawDonut(arrayPais) {

    var data = google.visualization.arrayToDataTable([
      ['Categoria', 'Edad'],
      ['Senior', arrayPais.senior],
      ['Adulto',      arrayPais.adultos],
      ['Joven',  arrayPais.jovenes]
    ]);

    var options = {
      title: 'Edades',
      is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));


    chart.draw(data, options);
  }

$(document).ready(function()
{
    google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);



   var parametros = {funcion: "paises"};
   
    $.ajax(
      {
        data: parametros,
        url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
        type:'post',
        
        success:function(response)
        {
      
        //console.log(response);
         var arrayPuntuaciones = JSON.parse(response);
         console.log(arrayPuntuaciones[0].pais);
        drawRegionsMap(arrayPuntuaciones);
        },
        error: function(error)
        {
          alert("Se ha producido un error");
          console.log(error);
        }
      }
    );

    var parametros = {funcion: "edades"};
   
    $.ajax(
      {
        data: parametros,
        url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
        type:'post',
        
        success:function(response)
        {
      
        //console.log(response);
         var arrayP = JSON.parse(response);
         console.log(arrayP.jovenes);
          drawDonut(arrayP);
        },
        error: function(error)
        {
          alert("Se ha producido un error");
          console.log(error);
        }
      }
    );
   
    
   
    
});