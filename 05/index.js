const { log } = require('console');
const fs = require('fs');

fs.unlink("./nodejs_architecture.txt",()=>{
    console.log("file deleted succesfully");
})