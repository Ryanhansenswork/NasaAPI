/*
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
*/
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    var sol = document.getElementById('selectSol').value;
    fetch('https://api.nasa.gov/insight_weather/?api_key=EsFcRfGoF3NjIzpRq2fRyFCJCYkfki5tPShmL4VL&feedtype=json&ver=1.0')
        .then(response => response.json())
        .then(data => {
            if (data.hasOwnProperty('sol' + sol)) {
                var solData = data['sol' + sol];
                var solDate = new Date(solData.First_UTC);
                document.getElementById('solDate').innerText = 'Sol Date: ' + solDate.toDateString();
                document.getElementById('highTemp').innerText = 'High Temperature: ' + solData.AT.mx.toFixed(2) + ' °C';
                document.getElementById('lowTemp').innerText = 'Low Temperature: ' + solData.AT.mn.toFixed(2) + ' °C';
            } else {
                alert('Nasa turned off their mars weather services :(');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});

//button
const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>
{
    btn.style.backgroundColor = '#ff4500';
    btn.style.boxShadow = '0 0 40px #ff4500';
    btn.style.transition = '.5s ease';
});

//change active nav
const activelink = window.location.pathname;
const navLinks = document.querySelectorAll('ul a').forEach(link =>{
    if(link.href.includes(`${activelink}`)){
      link.classList.add('nav-links')
    }
})

