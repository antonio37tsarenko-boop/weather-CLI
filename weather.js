#!/usr/bin/env node

import {getArgs} from "./helpers/args.js";
import {printError, printSuccess, printHelp, printForecast} from "./services/logService.js";
import { saveKeyValue, getKeyValue } from "./services/storageService.js";
import { getWeather } from "./services/apiService.js";

async function saveToken(token) {
    if(!token.length) {
        printError('Token is empty!');
        return;
    }

        await saveKeyValue('token', token);
        printSuccess(' Token saved successfully.');
}

async function saveCity(city) {
    if(!city.length) {
        printError('City is empty!');
        return;
    }
        await saveKeyValue('city', city);
        printSuccess(' City saved successfully.')
}

async function getForecast(){
    const city = await getKeyValue('city');
    let weatherData

    try {
        weatherData = await getWeather(city);

    }catch(err){
        switch(err.status){
            case 404: printError(' City doesnt exist'); return;
            case 401: printError(' Token is invalid'); return;
            case 400: printError(' City isnt created'); return;
            default: printError(err); return;
        }
    }
    printForecast(weatherData, city)
}

const initCLI = async function(){
    const args = getArgs(process.argv);
    let showWeatherStatus = true;

    if(args.h){
        printHelp();
        showWeatherStatus = false
    }
    if(args.c){
        !await saveCity(args.c)

        showWeatherStatus = false
    }
    if(args.t){
         await saveToken(args.t);
        showWeatherStatus = false
    }
    if(showWeatherStatus){
        await getForecast()
    }
}

initCLI()