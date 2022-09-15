#!/usr/bin/env node
let inputArr=process.argv.slice(2);
let fs=require("fs");
let path=require("path");
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree");
let   = require("./commands/organize");
const { treeKey } = require("./commands/tree");
//console.log(inputArr);
// node main.js tree "directoryPath"
// node main.js organize "directoryPath"
//node main.js help
let command=inputArr[0];
let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
switch(command){
    case "tree":
        //treeFn(inputArr[1]);
        treeObj:treeKey(inputArr[1]);
        break;
        case "organize":
           // organizeFn(inputArr[1]);
           organizeObj:organizeFn(inputArr[1]);
            break;
            case "help":
                //helpFn(inputArr[1]);
                helpObj.helpKey(inputArr[1]);
                break;
                default:
                    console.log("Please 🙏 Input Right Command");
}




