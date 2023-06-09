// write file in asynchronous way
import {writeFile} from "node:fs/promises";

async function main(){


let filepath = "F:\WPT\NODE JS\NODE"
let fileData = `hello i'm shivanshu`;

 await writeFile(filepath, fileData);
}
console.log("write success");