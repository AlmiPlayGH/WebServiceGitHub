function drawRegionsMap(arrayPais) {
    var data =new google.visualization.DataTable();
    data.addColumn('string', 'Pais');
    data.addColumn('number', 'Puntuacion');
    var sizeArray = arrayPais.length;
    for(var i = 0; i < sizeArray; i++)
    {
        data.addRow( [arrayPais[i].pais, arrayPais[i].puntuacion]);
    }

    /*var data = google.visualization.arrayToDataTable([
        ['Country', 'Popularity'],
        ['Spain', 200],
        ['United States', 300],
        ['Brazil', 400],
        ['Canada', 500],
        ['France', 600],
        ['RU', 700]
      ]);*/
      //console.log(arrayPais);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

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

   var arrayPuntuaciones="";

   var parametros = {funcion: "paises"};
   
    $.ajax(
      {
        data: parametros,
        url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
        type:'post',
        
        success:function(response)
        {
         //console.log(response);
         arrayPuntuaciones = JSON.parse(response);
         console.log(arrayPuntuaciones);
           //drawRegionsMap(this);
        },
        error: function(error)
        {
          alert("Se ha producido un error");
          console.log(error);
        }
      }
    );
   
    
   
    
});