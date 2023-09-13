const { Console, log } = require('console');
const os = require('os');

const osname = os.type(()=>{
    console.log(`Operating System: ,${osname}`);
});
console.log(os.type());
const osRelease = os.release(()=>{
    console.log(`OS Release : ${osRelease}`);
})
console.log(os.release());