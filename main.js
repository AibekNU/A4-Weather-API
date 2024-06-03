const apiKey = "8342e513dd06803b153568824f0b6cc5";

async function getWeather() {
  const city = document.getElementById("city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("weather-result").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
    } else {
      document.getElementById("weather-result").innerHTML = `
                <p>${data.message}</p>
            `;
    }
  } catch (error) {
    document.getElementById(
      "weather-result"
    ).innerHTML = `<p>Error fetching weather data</p>`;
  }
}
