const apiKey = "YOUR_API_KEY"; // Replace with your actual OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("city").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "<p>Please enter a city name.</p>";
    return;
  }

  try {
    const res = await fetch(
      \`https://api.openweathermap.org/data/2.5/weather?q=\${city}&appid=\${apiKey}&units=metric\`
    );
    const data = await res.json();

    if (data.cod !== 200) {
      resultDiv.innerHTML = "<p>City not found. Try again.</p>";
      return;
    }

    resultDiv.innerHTML = `
      <h2>Weather in ${data.name}</h2>
      <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>Condition:</strong> ${data.weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "<p>Error fetching weather data.</p>";
  }
}
