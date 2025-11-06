import { getKeyValue } from "./storageService.js";
import { printError } from "./logService.js";
import  dedent  from 'dedent-js'
async function getWeather(city){
    const userToken = await getKeyValue('token');
    if(!userToken){
        printError('No user token');
    }
    let weatherData = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${userToken}&q=${city}&units=metric&cnt=1&mode=json`,
    )
    weatherData = await weatherData.json()
    const temp = Math.round(weatherData.list[0].main.temp * 10) / 10;
    const feelsLike = Math.round(weatherData.list[0].main.feels_like * 10) / 10;
    const weatherDesc = weatherData.list[0].weather[0].description;
    const icon = weatherData.list[0].weather[0].icon;
    const windSpeed = weatherData.list[0].wind.speed;
    console.log(
        dedent`
    weather in ${city}:
    ${weatherDesc}
    temperature ${temp} (feels like ${feelsLike})
    wind speed ${windSpeed}
    `
    );
    // if(weather ==)
}

export { getWeather }
