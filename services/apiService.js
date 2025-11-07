import { getKeyValue } from "./storageService.js";
import axios from 'axios'
import {printError} from "./logService.js";

async function getWeather(city){
    const userToken = await getKeyValue('token');
    let weatherData

    if(!userToken){
        throw new Error(' No user token')
    }
        const {data} = await axios.get(
            'https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    q: city,
                    appid: userToken,
                    units: 'metric'
                }
            }
        )
        weatherData = data
    return weatherData
}

export { getWeather }