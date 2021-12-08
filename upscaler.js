const fs = require("fs-extra");
const util = require("util");
const jimp = require("jimp")

const exec = require("child_process").exec;

(async function () {
    try {
        await fs.remove("temp");
        await fs.remove("output.mp4")
        console.log("Initializing temporary files");
        await fs.mkdir("temp");
        await fs.mkdir("temp/raw-frames");
        await fs.mkdir("temp/edited-frames");
        var t1 = Date.now();
        console.log("Decoding");
        await exec(`ffmpeg -i input.mp4 -s 256x144 -filter:v fps=1 temp/raw-frames/%d.png`);

        console.log("Rendering");
        const frames = fs.readdirSync("temp/raw-frames");
        for (let count = 1; count <= frames.length; count++) {
            await jimp.read(`temp/raw-frames/${count}.png`, (err, lenna) => {
                if (err) throw err;
                lenna
                    .resize(640, 480)
                    .write(`temp/edited-frames/${count}.png`);
            });
        }

        console.log("Completed in", (Date.now() - t1) / 1000 + "s")
        console.log("Cleaning up");
        //await fs.remove("temp");

    } catch (error) {
        console.log("An error occurred:", error);
        await fs.remove("temp");
    }
})();