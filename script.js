const searchForm = document.querySelector(".searchBar > form");
const weatherInfoCard = document.querySelector(".weatherInfoCard");


async function displayWeatherDetails(place) {
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee30b4612cb9415e8dd173426232909&q=${place}`);
    const weather = await request.json();
    const conditionIconSrc = weather.current.condition.icon.replace("//cdn.weatherapi.com", "images");

    weatherInfoCard.innerHTML = `
        <div class="location">${weather.location.name}, ${weather.location.country}</div>
        <div class="datetime">${weather.current.last_updated.split(" ").join(" | ")}</div>
        <div class="condition">
            <img class="icon" src="${conditionIconSrc}">
            <div>${weather.current.condition.text}</div>
        </div>
        <div class="actualTemp">${weather.current.temp_c}°C</div>
        <div class="feelsLikeTemp">Feels Like ${weather.current.feelslike_c}°C</div>
        <div class="humidity">Humidity ${weather.current.humidity}%</div>
        <div class="cloud">Cloudiness ${weather.current.cloud}%</div>
        <div class="windSpeed">Wind Speed ${weather.current.wind_kph}km/h</div>
        <div class="windDirection">Wind Direction ${weather.current.wind_dir}</div>
        <div class="uv">UV Index ${weather.current.uv}</div>
    `

}

displayWeatherDetails("New Delhi");

searchForm.addEventListener("submit", function (e) {
    console.log(displayWeatherDetails(place.value));
    e.preventDefault();
});