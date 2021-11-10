const fs = require("fs-extra");
const util = require("util");
const { execFile } = require("child_process");
const exec = util.promisify(require("child_process").exec);

var width;
var height;
var ori = null;

function getVideoDetails() {
    return new Promise((resolve, reject) => {
        execFile('ffprobe.exe', ["-v", "quiet", "-print_format", "json", "-show_format", "-show_streams", './input.mp4'], (err, stdout, stderr) => {
            if (err) { reject(err); return; }

            var data = JSON.parse(stdout.toString('utf8'));
            width = data.streams[0].width
            height = data.streams[0].height
            ori = data.streams[0].display_aspect_ratio
            resolve({})
        })
    })
}

(async function () {
    try {
        await fs.remove("outputs")
        await fs.mkdir("outputs");
        await getVideoDetails()

        switch (ori.toString()) {
            case "16:9":
                await fs.mkdir("./outputs/16.9");
                if (320 < width) {
                    console.log("Downscaling to 320x240");
                    await exec('ffmpeg -i input.mp4 -s 320x240 -vcodec h264 ./outputs/16.9/output_240p.mp4')
                }
                if (640 < width) {
                    console.log("Downscaling to 640x360");
                    await exec('ffmpeg -i input.mp4 -s 640x360 -vcodec h264 ./outputs/16.9/output_360p.mp4')
                }
                if (848 < width) {
                    console.log("Downscaling to 848x480");
                    await exec('ffmpeg -i input.mp4 -s 848x480 -vcodec h264 ./outputs/16.9/output_480p.mp4')
                }
                if (1280 < width) {
                    console.log("Downscaling to 1280x720");
                    await exec('ffmpeg -i input.mp4 -s 1280x720 -vcodec h264 ./outputs/16.9/output_720p.mp4')
                }
                if (1920 < width) {
                    console.log("Downscaling to 1920x1080");
                    await exec('ffmpeg -i input.mp4 -s 1920x1080 -vcodec h264 ./outputs/16.9/output_1080p.mp4')
                }
                if (2560 < width) {
                    console.log("Downscaling to 2560x1440");
                    await exec('ffmpeg -i input.mp4 -s 2560x1440 -vcodec h264 ./outputs/16.9/output_1440p.mp4')
                }
                if (3840 < width) {
                    console.log("Downscaling to 3840x2160");
                    await exec('ffmpeg -i input.mp4 -s 3840x2160 -vcodec h264 ./outputs/16.9/output_2160p.mp4')
                }


                /*if (256 < width){
                    console.log("Downscaling to 256x144");
                    await exec('ffmpeg -i input.mp4 -s 256x144 -vcodec h264 ./outputs/16.9/output_144p.mp4')
                }
                if (960 < width) { 
                    console.log("Downscaling to 960x540");
                    await exec('ffmpeg -i input.mp4 -s 960x540 -vcodec h264 ./outputs/16.9/output_540p.mp4')
                }
                if (1024 < width) { 
                    console.log("Downscaling to 1024x576");
                    await exec('ffmpeg -i input.mp4 -s 1024x576 -vcodec h264 ./outputs/16.9/output_576p.mp4')
                }
                if (1366 < width) { 
                    console.log("Downscaling to 1366x768");
                    await exec('ffmpeg -i input.mp4 -s 1366x768 -vcodec h264 ./outputs/16.9/output_768p.mp4')
                }
                if (1600 < width) {
                    console.log("Downscaling to 1600x900");
                    await exec('ffmpeg -i input.mp4 -s 1600x900 -vcodec h264 ./outputs/16.9/output_900p.mp4')
                }
                if (3200 < width) { 
                    console.log("Downscaling to 3200x1800");
                    await exec('ffmpeg -i input.mp4 -s 3200x1800 -vcodec h264 ./outputs/16.9/output_1800p.mp4')
                }
                if (5120 < width) { 
                    console.log("Downscaling to 5120x2880");
                    await exec('ffmpeg -i input.mp4 -s 5120x2880 -vcodec h264 ./outputs/16.9/output_2880p.mp4')
                }
                if (7680 < width) { 
                    console.log("Downscaling to 7680x4320");
                    await exec('ffmpeg -i input.mp4 -s 7680x4320 -vcodec h264 ./outputs/16.9/output_4320p.mp4')
                }*/
                break;
            case "4:3":
                break;
            case "9:16":
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
                break;
            default:
                console.error('Unknown aspect ration('+ori.toString()+'). Please change the aspect ratio.')
                break;
        }
    } catch (error) {
        console.log("An error occurred:", error);
    }
})();