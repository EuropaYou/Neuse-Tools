const util = require("util")
const excfl = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);
const Process = require("process");
const fse = require("fs-extra");

//#region Screenshot
// Takes single screenshot
function takeScreenshot() {
    fse.mkdirSync("screenshots")
    var x = Date.now()
    var scr = "./screenshots/" + "Screenshot_" + x + ".jpeg";
    console.log(scr)
    exec("ffmpeg -f gdigrab -i desktop -frames:v 1 " + scr)
    //excfl("./ffmpeg.exe", ["-f", "gdigrab", "-i", "desktop", "-frames:v", "1", scr])
    console.log("Completed in", (Date.now() - x) / 1000 + "s")
}

// Takes multiple screenshots. Higher the secs and fps lower the performance gets. Please use video recorder to record videos
function takeScreenshotsOfDesktop(secs, fps) {
    switch (true){
        case(secs <= 10):
            switch (true) {
                case (fps <= 5):
                    console.log(secs * fps, "frames will be generated!")
                    fse.removeSync("screenshots")
                    fse.mkdirSync("screenshots")
                    //exec("ffmpeg -f gdigrab -i desktop -frames:v 1 foobar.jpeg")
                    for (let i = 1; i < secs; i++) {
                        setTimeout(() => {
                            console.log(i, secs, fps)
                            var x = Date.now()
                            var scr = "./screenshots/" + "Screenshot_" + x + ".png";
                            console.log(scr)
                            excfl("./ffmpeg.exe", ["-f", "gdigrab", "-i", "desktop", scr])
                            console.log("Completed in", (Date.now() - x) / 1000 + "s")
                        }, Math.floor(secs / fps));
                    }
                    break;
                default:
                    console.log("Exit code: 1")
                    Process.exit(1)
            }
            break;
        default:
            console.log("Exit code: 2")
            Process.exit(1)
}
}
//#endregion

async function captureWebcam(wbcm) {
    /*
    .\ffmpeg -list_options true -f dshow -i video="USB 2.0 Webcam Device"
    show available resolutions

    .\ffmpeg.exe -f dshow -s 1280x720 -i video="USB 2.0 Webcam Device" -b:v 3M out.mp4
    record the webcam
    */
	await excfl("ffmpeg.exe", ["-list_options", "true", "-f", "dshow", "-i", "video=USB 2.0 Webcam Device"])
    excfl("ffmpeg.exe", ["-f", "dshow", "-s", "1280x720", "-i", "video=USB 2.0 Webcam Device", "-b:v", "3M", "out.mkv"])
}
async function captureDesktop(bitrate, filepath, filename, systemAudio, microphone, fps) {
    excfl("ffmpeg.exe", ["-f", "gdigrab", "-i", "desktop", "-b:v", "6M", "output.mp4"])
}
function captureApp(app) {}
function captureWebcamDesktop(wbcm) {}
function captureWebcamApp(wbcm, app) {}

//takeScreenshotsOfDesktop(10, 4)
//takeScreenshot()
//captureDesktop()
captureWebcam()