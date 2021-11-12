const fse = require("fs-extra");
const fsu = require("fs")
const util = require("util");
const exec = util.promisify(require("child_process").exec);

var a;
var filepath = process.argv[2]
//fse.remove("outputs/16.9/output_of_.mp4");
async function upscale() {
    try {
        /*await exec("ffmpeg -f gdigrab-framerate 30 -i desktop outputy.mp4", (err) => {
            if(err) throw err;
            else{
                console.log("Started recording!")
            }
        })*/

        /*await fse.remove("output.mp4")
        await exec('ffmpeg -i input.mp4 -s 320x240 output.mp4')
        await fse.remove("output1.mp4")*/
        fsu.readdirSync(filepath).forEach((async function (file, number, array) {
            var t1 = Date.now();
            a = filepath + file;
            await exec("ffmpeg -i " + a + " -s 640x480 -c:a copy -shortest -preset ultrafast -threads 16 -b:v 12M " + filepath + "output_of_.mp4" + file).then(() => {
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s");
                    
                }
            );
        }))
    } catch (err) {
        console.log(err)
    }
}

upscale()