let fs = require("fs")
let path = require("path")
//Function for the command organise
function organiseFn(dirPath)
{
    let folderPath;
    if(dirPath==undefined)
    {
        folderPath=process.cwd();
        return ;
    }
    if(fs.existsSync(dirPath)==true){
        folderPath = path.join(dirPath,"organised_directory")
        let doesPathExist = fs.existsSync(folderPath)
        if(doesPathExist==false)
        {
            fs.mkdirSync(folderPath)
        }
    }else
    {
        console.log("Please Enter the correct path")
        return ;
    }
    organiserHelper(dirPath,folderPath);
}

function organiserHelper(src, dest)
{
    let contentOfDirectory = fs.readdirSync(src)
    // console.log(contentOfDirectory)
    for(let i = 0 ; i<contentOfDirectory.length ; i++)
    {
        let currentAddress = path.join(src,contentOfDirectory[i])
        let chckForFile = fs.lstatSync(currentAddress).isFile();
        if(chckForFile==true)
        {
            let category = getCategoryForFile(currentAddress);
            let cateogryPath = path.join(dest,category);
            if(fs.existsSync(cateogryPath)==false)
            {
                fs.mkdirSync(cateogryPath);
            }
            let fileName = path.basename(currentAddress);
            let pathForCopy = path.join(cateogryPath,fileName);
            fs.copyFileSync(currentAddress,pathForCopy)
            fs.unlinkSync(currentAddress);
        }
    }
}

function getCategoryForFile(fileAddress)
{
    let ext = path.extname(fileAddress)
    ext=ext.slice(1)
    for(let type in types)
    {
        for(let i =0 ; i<types[type].length ; i++)
        {
            if(types[type][i]==ext)
                return type
        }
    }
    return "others"
}

module.exports={
    organisekey:organiseFn
}