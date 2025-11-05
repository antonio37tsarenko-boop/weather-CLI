#!/usr/bin/env node
import {getArgs} from "./helpers/args.js";
import {printError, printSuccess, printHelp} from "./services/logService.js";
import { saveKeyValue, getKeyValue } from "./services/storageService.js";

async function saveToken(token) {
    try {
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
        //set or change city
    }
    if(args.t){
        return await saveToken(args.t);
    }
}

initCLI()