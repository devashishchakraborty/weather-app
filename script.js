const searchForm = document.querySelector(".searchBar > form");
const weatherInfoCard = document.querySelector(".weatherInfoCard");

async function getWeather(place){
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee30b4612cb9415e8dd173426232909&q=${place}`);
    const response = await request.json();
    return response;
}

async function displayWeatherDetails(response){
    const weather = await response;
    const location = weatherInfoCard.querySelector(".location");
    const datetime = weatherInfoCard.querySelector(".datetime");

    location.textContent = `${weather.location.name}, ${weather.location.country}`;
    datetime.textContent = `${weather.current.last_updated}`;
}

const weather = getWeather("New Delhi");
displayWeatherDetails(weather);

searchForm.addEventListener("submit", function(e){
    console.log(getWeather(place.value));
    e.preventDefault();
});