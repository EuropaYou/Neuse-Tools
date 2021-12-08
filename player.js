const util = require("util");
const exec = util.promisify(require("child_process").execFile)
var i = process.argv[2];
//exec("ffplay", i, "-window_title NeusePlayer -loop 0 -x 256 -s 144")
(async function () {
    await exec("./ffplay.exe", ["input.mp4", "-window_title", "NeusePlayer", "-loop", "0", "-x", "256", "-s", "144"])
    
})()

/*
-x width | Force displayed width, -y height | Force displayed height.
-s size | Set frame size, needed for videos which do not contain a header with the frame size like raw YUV. This option has been deprecated in favor of private options, try -video_size.
-fs | fullscreen, -an | Disable audio, -vn | Disable video, -sn | Disable subtitles,
-ss pos | Seek to pos. Note that in most formats it is not possible to seek exactly, ffplay will seek to the nearest seek point to pos. pos must be a time duration specification.
-t duration | Play duration seconds of audio/video. duration must be a time duration specification, see (ffmpeg-utils)the Time duration section in the ffmpeg-utils(1) manual.
loop number | Loop <number> times. 0 = forever.
-showmode mode | Available values for mode are: ‘0, video’, ‘1, waves’, ‘2, rdft’
while playing: (q)uit, (f)ullscreen, (p)ause, (m)ute, 9-0(volume), left-right(seek backward/forward 10sec), down-up(seek backward/forward 1min),
pageDWN,pageUP(Seek to the previous/next chapter. Or dont Seek backward/forward 10 minutes), RMB(Seek to percentage in file corresponding to fraction of width), LMB(Toggle Fullscreen)
*/