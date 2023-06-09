// how to read data 
//asynchronous  way

import {readFile} from "node:fs/promises"

async function main(){
    let filepath = "F:\WPT\NODE JS\NODE\src\notes.txt";
    let fileData = await readFile(filepath, {encoding: "utf-8"});
    console.log (fileData);
}