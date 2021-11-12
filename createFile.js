const crypto = require('crypto');
const fs = require("fs")
let time = 1;
let name = process.argv[2];
let fileCount = parseInt(process.argv[3])
let fileSize = parseInt(process.argv[4])

function start(n, times, size) {
    try {
        fs.accessSync('./dump', fs.constants.R_OK | fs.constants.W_OK);
    } catch (err) {
        fs.mkdirSync('./dump/')
    }
    fs.readdirSync('./dump/').forEach(function(file, number, files) {
        fs.unlinkSync("./dump/"+file, (err) => {
            if (err) throw err;
            console.log(file, 'was deleted');
        });
    })
    var z = size * 1024 * 1024 // bayt'ı megabayt yapıyor
    var x = crypto.randomBytes(z)
    while(time <= times) {
        let filename = "./dump/"+n + "_" + time
        console.log(filename,time,"of", times)
        fs.writeFileSync(filename, x, (err) => {
            if (err) console.log(err);
        });
        time++
    }
}
start(name, fileCount, fileSize)