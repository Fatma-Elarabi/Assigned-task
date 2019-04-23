google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Hours per Day'],
  ['up', 8],
  ['down', 4],
  ['unchange', 2],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'MARKET DEPTH', 'titleTextStyle': {
        color: '#404040', fontSize: 20,  }
        , 'chartArea':{left: '10%',top: '15%',width:'90%',height:'75%'}
        , 'legend': { position: 'bottom', alignment: 'center'}
        , 'width':450, 'height':345, 'colors':['#41bbee', '#70d6e4', '#e4e9ec']};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}


var delay = 500;
$(".progress-bar").each(function(i){
    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: delay,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now)+'%');
        }
    });
});