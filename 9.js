import {readFile} from "node:fs/promises";

async function main(){
   try { 
    let filepath = "F:\WPT\NODE JS\NOoDE\src\notes.txt";
    let fileData = await readfile (filepath, {encoding :"utf8"});
    console.log(fileData);
    }
    catch(e){
        console.log("no file exist");
    }
}
main();
//check from sir code something wrong