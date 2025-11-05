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

export { printError, printSuccess, printHelp }