const fs = require("fs-extra");
const util = require("util");
const { execFile } = require("child_process");
const exec = util.promisify(require("child_process").exec);

var width;
var height;
var asprat = null;
var t1;
var t3 = 0;
// TODO Change the aspect ratio
function getVideoDetails() {
    return new Promise((resolve, reject) => {
        execFile('ffprobe.exe', ["-v", "quiet", "-print_format", "json", "-show_format", "-show_streams", './input.mp4'], (err, stdout, stderr) => {
            if (err) { reject(err); return; }
            var data = JSON.parse(stdout.toString('utf8'));
            width = data.streams[0].width
            height = data.streams[0].height
            asprat = data.streams[0].display_aspect_ratio
            resolve({})
        })
    })
}
// execFile is async, exec is sync
(async function () {
    try {
        await fs.remove("outputs")
        await fs.mkdir("outputs");
        await getVideoDetails()
        //width = width + 4000;
        switch (asprat.toString()) {
            case "16:9":
                //#region 
                await fs.mkdir("./outputs/16.9");
                if (320 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 320x240");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 320x240 -b:v 3M -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_240p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (640 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 640x360");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 640x360 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_360p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (848 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 848x480");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 848x480 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_480p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (1280 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 1280x720");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 1280x720 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_720p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (1920 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 1920x1080");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 1920x1080 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_1080p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (2560 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 2560x1440");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 2560x1440 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_1440p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                if (3840 < width) {
                    t1 = Date.now()
                    console.log("Downscaling to 3840x2160");
                    await exec('ffmpeg -i input.mp4 -c:a copy -s 3840x2160 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/16.9/output_2160p.mp4')
                    console.log("Completed in", (Date.now() - t1) / 1000 + "s")
                }
                break;
            //#endregion
            case "9:16":
                //#region 
                await fs.mkdir("./outputs/9.16");
                if (240 < width) {
                    console.log("Downscaling to 240x320");
                    await exec('ffmpeg -i input.mp4 -s 240x320 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_240p.mp4')
                }
                if (360 < width) {
                    console.log("Downscaling to 360x640");
                    await exec('ffmpeg -i input.mp4 -s 360x640 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_360p.mp4')
                }
                if (480 < width) {
                    console.log("Downscaling to 480x848");
                    await exec('ffmpeg -i input.mp4 -s 480x848 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_480p.mp4')
                }
                if (720 < width) {
                    console.log("Downscaling to 720x1280");
                    await exec('ffmpeg -i input.mp4 -s 720x1280 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_720p.mp4')
                }
                if (1080 < width) {
                    console.log("Downscaling to 1080x1920");
                    await exec('ffmpeg -i input.mp4 -s 1080x1920 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_1080p.mp4')
                }
                if (1440 < width) {
                    console.log("Downscaling to 1440x2560");
                    await exec('ffmpeg -i input.mp4 -s 1440x2560 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear ./outputs/9.16/output_1440p.mp4')
                }
                if (2160 < width) {
                    console.log("Downscaling to 2160x3840");
                    await exec('ffmpeg -i input.mp4 -s 2160x3840 -shortest -preset ultrafast -threads 16 -sws_flags fast_bilinear  ./outputs/9.16/output_2160p.mp4')
                }
                break;
            //#endregion
            /*case "4:3":
                break;
            case "1:1":
                break;
            case "16:10":
                break;
            case "4:3":
                break;
            case "37:20":
                break;
            case "2:1":
                break;
            case "21:9":
                break;*/
            default:
                console.error('Unknown aspect ratio(' + asprat.toString() + '). Please change the aspect ratio.')
                break;
        }
    } catch (error) { console.log("An error occurred:", error); }
})();

