// .\ffmpeg.exe -i input.mp4 -b:v 3M -vf subtitles=subtitle.srt out.avi

const util = require("util");
const exec = util.promisify(require("child_process").execFile)
const fs = require("fs-extra");

var inputFile = process.argv[2];
var subtitleFile = process.argv[3];
var outputFile = process.argv[4];

fs.remove(outputFile);
var sb = " subtitles=" + subtitleFile + " "
console.log(sb);
exec("./ffmpeg.exe" + [" -i " + inputFile + " -b:v " + "3m" + " -vf" + sb + outputFile])