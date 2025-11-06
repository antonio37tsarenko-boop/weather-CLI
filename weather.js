#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printError, printSuccess, printHelp} from "./services/logService.js";
import { saveKeyValue, getKeyValue } from "./services/storageService.js";
import { getWeather } from "./services/apiService.js";

async function saveToken(token) {
    try {
        if(!token.length){
            throw new Error('Token is empty!');
        }
        await saveKeyValue('token', token);
        printSuccess(' Token saved successfully.');
    }catch (error) {
        printError(error.message);
    }
}

const initCLI = async function(){
    debugger
    const args = getArgs(process.argv);
    if(args.h){
        printHelp();
    }
    if(args.s){

    }
    if(args.t){
        return await saveToken(args.t);
    }
}

initCLI()