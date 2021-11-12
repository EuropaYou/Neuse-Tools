const util = require("util")
const excfl = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);
const fs = require("fs-extra");

(async function() {
    await fs.remove("output.mp4");
    var a = Date.now()
    await excfl("ffmpeg.exe", ["-i", "input.mp4", "-c:v", "libaom-av1", "-cpu-used", "5", "-row-mt", "1", "output.mp4"])
    console.log((Date.now() - a) / 1000);
})()