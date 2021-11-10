const fse = require("fs-extra");
const fsu = require("fs")
const util = require("util");
const exec = util.promisify(require("child_process").exec);

var filepath = "D:/Dosyalar/Projeler/Neuse/Tools/outputs/16.9/";
var a;
//fse.remove("outputs/16.9/output_of_.mp4");
(async function () {
    try {
        /*await fse.remove("output.mp4")
        await exec('ffmpeg -i input.mp4 -s 320x240 output.mp4')
        await fse.remove("output1.mp4")
        */
        fsu.readdirSync(filepath).forEach((async function (file) {
            var t1 = Date.now();
            a = filepath + file
            await exec("ffmpeg -i " + a + " -s 1920x1080 -c:a copy -shortest -preset ultrafast -threads 16 " + filepath + "output_of_.mp4"+ file);
            console.log("Completed in", (Date.now() - t1) / 1000 + "s")
        }))
    } catch (err) {
        console.log(err)
    }
})()