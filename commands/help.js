//Function for the command help
function help()
{
    console.log(`
    Enter one of these command
    1] badri tree "directory path"
    2] badri organise "directory path"
    3] badri help
    `);
}

module.exports={
    helpKey:help 
}