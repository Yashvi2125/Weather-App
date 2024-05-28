document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '0e5161c7a13ee0d3a1a9a1ec7f10b726';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherInfo').classList.remove('hidden');
                document.getElementById('cityName').innerText = `Weather in ${data.name}`;
                document.getElementById('temperature').innerText = data.main.temp;
                document.getElementById('weatherDescription').innerText = data.weather[0].description;
                document.getElementById('humidity').innerText = data.main.humidity;
                document.getElementById('windSpeed').innerText = data.wind.speed;

                const iconCode = data.weather[0].icon;
                document.getElementById('weatherIcon').className = `wi wi-owm-${iconCode}`;
            } else {
                alert('City not found. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
