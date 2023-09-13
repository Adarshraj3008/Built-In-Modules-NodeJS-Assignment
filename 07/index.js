const http = require('http')
const port = 3000
const server = http.createServer((req,res)=>{
    if (req.url==("/")){
        res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!"
        );
    }
    res.end();
})
server.listen(port);
console.log(`server is running on Port ${port}`);