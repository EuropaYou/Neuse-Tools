const util = require("util")
const excfl = util.promisify(require("child_process").execFile);
const exec = require("child_process").exec;
const Process = require("process");
const fse = require("fs-extra")

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
                        console.log(i, secs, fps)
                        console.log(Math.floor(secs / fps))
                        var x = Date.now()
                        var scr = "./screenshots/" + "Screenshot_" + x + ".png";
                        console.log(scr)
                        excfl("./ffmpeg.exe", ["-f", "gdigrab", "-i", "desktop", "-frames:d", fps, scr])
                        console.log("Completed in", (Date.now() - x) / 1000 + "s")
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

function captureWebcam(wbcm) {}
function captureDesktop() {}
function captureApp(app) {}
function captureWebcamDesktop(wbcm) {}
function captureWebcamApp(wbcm, app) {}

//takeScreenshotsOfDesktop(10, 4)
takeScreenshot()