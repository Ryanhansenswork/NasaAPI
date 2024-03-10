document.getElementById('getWeatherBtn').addEventListener('click', function() {
    var sol = document.getElementById('selectSol').value;
    fetch('https://api.nasa.gov/insight_weather/?api_key=EsFcRfGoF3NjIzpRq2fRyFCJCYkfki5tPShmL4VL&feedtype=json&ver=1.0')
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty(sol)) {
                var solData = data[sol];
                var solDate = new Date(solData.First_UTC);
                document.getElementById('solDate').innerText = 'Sol Date: ' + solDate.toDateString();
                document.getElementById('highTemp').innerText = 'High Temperature: ' + solData.AT.mx.toFixed(2) + ' °C';
                document.getElementById('lowTemp').innerText = 'Low Temperature: ' + solData.AT.mn.toFixed(2) + ' °C';
            } else {
                alert('Invalid Sol day');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});





