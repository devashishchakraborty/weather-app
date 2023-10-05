async function getWeather(place){
    const request = await fetch(`https://api.weatherapi.com/v1/current.json?key=ee30b4612cb9415e8dd173426232909&q=${place}`);
    const response = await request.json();
    console.log(response);
}

getWeather("Jammu");