import { homedir } from 'os'
import { join } from "path"
import  { promises as fs } from 'fs';

const filePath = join(homedir(), 'weather-data.json');

async function saveKeyValue(key, value){
    let data = {};

    if(await isExist(filePath)){
        const file = await fs.readFile(filePath, 'utf8')
        data = JSON.parse(file)
    }

    data[key] = value;
    await fs.writeFile(filePath, JSON.stringify(data))
}

async function getKeyValue(key){
    if(await isExist(filePath)){
        const value = await fs.readFile(filePath, 'utf8')
        const data = JSON.parse(value)
        return data[key]
    }return undefined
}

const isExist = async (path)=>{
    try{
        await fs.stat(path)
        return true;

    }catch(err){
        return false;
    }
}

export { saveKeyValue, getKeyValue, filePath }