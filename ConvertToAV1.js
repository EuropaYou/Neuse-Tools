const util = require("util")
const excfl = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);
const fs = require("fs-extra");

var i = process.argv[2];
var o = process.argv[3];
(async function() {
    //await fs.remove("output.mp4");
    if(fs.existsSync())
    var a = Date.now()
    await excfl("ffmpeg.exe", ["-i", i, "-c:v", "libaom-av1", "-cpu-used", "5", "-row-mt", "1", o])
    console.log((Date.now() - a) / 1000);
})()