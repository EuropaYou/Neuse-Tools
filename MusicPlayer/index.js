const v = document.getElementById("video")
    var dur = document.getElementById("dur")
    var cur = document.getElementById("cur")
    var r = null//document.getElementById("rem")
    var ppb = document.getElementById("ppb")
    var ppp = document.getElementById("ppp")
    var pppp = document.getElementById("pppp")
    var ppv = document.getElementById("ppv")
    var ppl = document.getElementById("ppl")
    var ppvb = document.getElementById("ppvb")
    var min = null
    var sec = null
    var mina = null
    var seca = null
    var tot = null
    
    console.log(v.muted)

    ppv.addEventListener('change', (event) => {
        if (v.muted == true) {
            v.volume = 0
        }else {
            v.volume = ppv.value / 100
        }
        //ppv.value = v.volume
    })
    ppv.addEventListener('click', (event) => {
        if(v.muted == true) {
            v.volume = 0
        }else{
            v.volume = ppv.value / 100
        } //ppv.value = v.volume
    })/*
    ppvb.addEventListener('click', (event) => {
        if(v.muted == true) {
            v.muted = false
        }else{
            v.muted = true
        }
        ppv.value = v.volume
    })*/
    pppp.addEventListener('click', (event) => {
        v.currentTime = pppp.value
    })
    v.addEventListener('timeupdate', (event) => {
        if (Math.floor(v.duration) >= 60) {
            mina = Math.floor(v.duration / 60)
            seca = Math.floor(v.duration) - mina * 60
            dur.innerHTML = mina + ":" + seca
        } else {
            dur.innerHTML = Math.floor(v.duration)
        }

        if(Math.floor(v.currentTime) >= 60) {
            min = Math.floor(v.currentTime / 60)
            sec = Math.floor(v.currentTime) - min * 60
            if (sec < 10) {
                sec = "0" + sec
            }
            cur.innerHTML = min + ":" + sec
        }else {
            sec = Math.floor(v.currentTime) - min * 60
            cur.innerHTML = sec = "0" + sec
        }
        //r = Math.floor(v.duration - v.currentTime)
        ppp.max = Math.floor(v.duration)
        ppp.value = Math.floor(v.currentTime)
        pppp.max = Math.floor(v.duration)
        pppp.value = Math.floor(v.currentTime)
    }, 1000)

    function player_play() {
        if (v.paused == true) {
            ppb.className = "fas fa-pause fa-2x"
            v.play()
        }else {
            v.pause()
            ppb.className = "fas fa-play fa-2x"
        }
    }

    function player_previous() {}
    function player_next() {}
    
    function player_loop() {
        if (v.loop == true) {
            v.loop = false
            ppl.style.backgroundColor = "transparent";
        }else {
            v.loop = true
            ppl.style.backgroundColor = "lightgray"
        }
        console.log(v.loop)
    }
    function player_shuffle() {}