const util = require("util")
const excfl = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);
const fs = require("fs-extra");

var i = process.argv[2];
var o = process.argv[3];
//exec("./bin/ffmpeg -i input.mp4 --enable-gpl --enable-libx265 -c:v libx265 -rc vbr_hq -cq 18 -b:v 0k -2pass 0 output.mp4");
(async function () {
    await fs.remove("output.mp4");
    var a = Date.now()
    await excfl("ffmpeg.exe", ["-i", i, "-c:v", "libx265", "-shortest", "-preset", "ultrafast", "-threads", "16", "-c:a", "copy", o])
    console.log((Date.now() - a) / 1000);
})()