google.charts.load("current", {packages:['corechart']});
google.charts.setOnLoadCallback(drawPoint);

function drawPoint(arrayPun) {
   // console.log(arrayPun);
   var sizeArray = arrayPun.length;

   var data = new google.visualization.DataTable();
   data.addColumn('string', 'Fecha');
   data.addColumn('number', 'Puntuacion');
   
    for(var i = 0; i < sizeArray; i++)
    {
        data.addRow( [arrayPun[i].fecha, arrayPun[i].puntuacion]);
    }


    var options = {
      title: 'Puntuaciones por partida',
      hAxis: {title: 'Fecha',  titleTextStyle: {color: '#333'}},
      vAxis: {minValue: 0}
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
    chart.draw(data, options);
  }

  function drawCorrectas(arrayPun) {
    
    // console.log(arrayPun);
    var sizeArray = arrayPun.length;
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fecha');
    data.addColumn('number', 'Correctas');
    
     for(var i = 0; i < sizeArray; i++)
     {
         data.addRow( [arrayPun[i].fecha, arrayPun[i].correctas]);
     }
 
 
     var options = {
       title: 'Correctas por partida',
       hAxis: {title: 'Fecha',  titleTextStyle: {color: '#333'}},
       vAxis: {minValue: 0}
     };
 
     var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(data, options);
   }

   function drawTiempos(arrayPun) {
    
    // console.log(arrayPun);
    var sizeArray = arrayPun.length;
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Fecha');
    data.addColumn('number', 'Correctas');
    
     for(var i = 0; i < sizeArray; i++)
     {
         data.addRow( [arrayPun[i].fecha, arrayPun[i].tiempo]);
     }
 
 
     var options = {
       title: 'Tiempo por partida',
       hAxis: {title: 'Fecha',  titleTextStyle: {color: '#333'}},
       vAxis: {minValue: 0}
     };
 
     var chart = new google.visualization.PieChart(document.getElementById('piechart'));
     chart.draw(data, options);
   }

   function ponerTotales(array){
      var numPartidas = array.length;
      
      var htmlTotal = numPartidas;
      $("#total").html(htmlTotal);
   }



$(document).ready(function()
{
   var usuario =  $(".usuario").text();
   
   var parametros = {user: usuario, funcion: "puntuacion"};
   console.log(usuario);
    $.ajax(
      {
        data:parametros,
        url: 'http://127.0.0.1/trabajadorEjemplar/servicios.php',
        type:'post',
        success:function(response)
        {
          //console.log(response);
          arrayPuntuaciones = $.parseJSON(response);
          drawPoint(arrayPuntuaciones);
          drawCorrectas(arrayPuntuaciones);
          drawTiempos(arrayPuntuaciones);
          ponerTotales(arrayPuntuaciones);
          
        },
        error: function(error)
        {
          alert("Se ha producido un error");
          console.log(error);
        }
      }
    );
   
    
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    
});