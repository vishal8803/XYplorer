#!/usr/bin/env node
//Node Modules


let helpObj = require("./commands/help")
let treeObj = require("./commands/tree")
let organiseObj = require("./commands/organise")

// taking input from user which skips "node" and file name
let inputArr = process.argv.splice(2);

//Command input by user name
let inputCommand = inputArr[0]

let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"],
    images: ['png','jpg','jpeg']
}

switch(inputCommand)
{
    case "tree":
        treeObj.treekey(inputArr[1]) // inputArr[1]-> directory name input by user
        break;
    case "organise":
        organiseObj.organisekey(inputArr[1]) // inputArr[1]-> directory name input by user
        break;
    case "help":
        helpObj.helpKey()
        break;
    default:
        console.log("🙏🏻 Please Enter Correct Command")
}


