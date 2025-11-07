import chalk from "chalk"
import dedent from "dedent-js"

const printError = function(err){
    console.log(chalk.bgRed(' ERROR ') + err)
}

const printSuccess = function(message){
    console.log(chalk.bgGreen(' SUCCESS ') + message);
}

const printHelp = () => {
    console.log(dedent`
        ${chalk.bgCyan(' HELP ')}
        no parameters for weather
        -s [CITY] to set city
        -h for HELP
        -t [API_KEY] to save token
    `)
}

function printForecast(res, city){
    const temp = Math.round(res.main.temp * 10) / 10;
    const feelsLike = Math.round(res.main.feels_like * 10) / 10;
    const weatherDesc = res.weather[0].description;
    const windSpeed = Math.round(res.wind.speed * 10) / 10;
    let icon = res.weather[0].icon;

    function defineIcon(icon){
        switch (icon.slice(0, -1)) {
            case '01':
                return '☀️';
            case '02':
                return '🌤️';
            case '03':
                return '☁️';
            case '04':
                return '☁️';
            case '09':
                return '🌧️';
            case '10':
                return '🌦️';
            case '11':
                return '🌩️';
            case '13':
                return '❄️';
            case '50':
                return '🌫️';
        }
    }
    icon = defineIcon(icon)

    printSuccess(dedent`
        ${icon} weather in ${city}:
       ${weatherDesc},
       temperature ${temp}C (feels like ${feelsLike}C),
       wind speed ${windSpeed} kph
    `)
}
export { printError, printSuccess, printHelp, printForecast }