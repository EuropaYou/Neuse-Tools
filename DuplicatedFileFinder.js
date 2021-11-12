var fs = require('fs');
var i,a = 0;
var exec = require('child_process').exec;
function getCommandLine() {
    switch (process.platform) {
        case 'darwin': return 'open';
        case 'win32': return 'start';
        case 'win64': return 'start';
        default: return 'xdg-open';
    }
}

var filepatha = "D:/Dosyalar/Kişisel/media/"
var filepathb = "D:/Dosyalar/Kişisel/media/"

fs.readdirSync(filepatha).forEach(async function (file, number, string) {
    var f0 = Buffer.from(file)
    await fs.readdirSync(filepathb).forEach(file1 => {
        var f1 = Buffer.from(file1)
        if (f0.equals(f1)) {
            console.log("Found duplicated files:")
            console.log(filepatha + file)
            console.log(filepathb + file1)
            fs.unlink(filepathb + file1, (err) => {
                if (err) throw err
            })
            console.log("--------------------")
            exec(getCommandLine() + ' '+ filepathb + file);
            i++
        }
        a++
    })
})