const fs = require("fs");

var asd = [
    "1",
    "\n00:00:07,000 --> 00:00:12,000",
    "\nSenator we're making our final approach into Coruscant"
]

// Add support to JSON.
var i = 1;
var data = "1\n00: 00: 07, 000 -- > 00: 00: 12, 000\nSenator, we're making our final approach into <bold>Coruscant</bold>.\n2\n00: 00: 12, 000 -- > 00: 00: 17, 000\nVery good, Lieutenant.\n3\n00: 00: 17, 000 -- > 00: 00: 22, 000\nDraw subtitles on top of input video using the libass library.This filter requires ffmpeg to be compiled with --enable - libass.See the ​subtitles video filter documentation for more details.\n4\n00: 00: 22, 000 -- > 00: 00: 27, 000\nIf the subtitle is a separate file called subtitle.srt, you can use this command";
var done = false;
(() => {
    while (!done) {
        // Add
        console.log(i++);

        // Insert Start-End Timelines
        console.log("Insert start timeline (HH:MM:SS)");
        console.log("Insert end timeline (HH:MM:SS)");

        // Inserts script
        console.log("Insert script");

        // Write to file
    }
})()

console.log(asd.join(""));

fs.writeFile("subtitle.srt", data, (err) => {
    if(err) console.log(err);
})