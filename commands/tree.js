let fs = require("fs")
let path = require("path")
//Function for the command tree
function treeFn(dirPath)
{
    if(dirPath==undefined)
    {
        treeHelper(process.cwd(),"")
        return ;
    }
    if(fs.existsSync(dirPath)==true)
    {
        treeHelper(dirPath,"")    
    }else
    {
        console.log("Please Enter the correct path")
        return ;
    }
}

function treeHelper(dirPath,indent)
{
    let isFile = fs.lstatSync(dirPath).isFile()
    if(isFile==true)
    {
        let fileName = path.basename(dirPath);
        console.log(indent+"├──"+fileName)
    }else
    {
        let dirName = path.basename(dirPath)
        console.log(indent+"└──"+dirName);
        let contentinDirecotry =fs.readdirSync(dirPath)
        for(let i=0 ; i<contentinDirecotry.length ; i++)
        {
            let childrenPath = path.join(dirPath,contentinDirecotry[i])
            treeHelper(childrenPath,indent+"\t");
        } 
    }
}

module.exports={
    treekey:treeFn
}