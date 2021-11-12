const os = require('os');
const process = require('process');

console.log("Architecture:", os.arch())
//console.log(os.cpus())
console.log("Total Memory:", os.totalmem() / 1024 / 1024 / 1024)
console.log("Free Memory:", os.freemem() / 1024 / 1024 / 1024)
console.log("Used Memory:", (os.totalmem() / 1024 / 1024 / 1024) - (os.freemem() / 1024 / 1024 / 1024))
//console.log(os.networkInterfaces())
console.log("Home Dir:", os.homedir())
console.log("Host Name:", os.hostname())
console.log("Platform:", os.platform())
console.log("Type:", os.type())
console.log("Release:", os.release())
console.log("Version:", os.version())
console.log("Uptime:", Math.floor(os.uptime() / 60 / 60), "hours", Math.floor(os.uptime() / 60 % 60), "Minutes", Math.floor(os.uptime() % 60), "Seconds")
console.log(process.uptime())
process.on('exit', (code) => {
    console.log('Process exit event with code: ', code);
});