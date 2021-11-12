const scrape = require('website-scraper');
var url = "http://www.elgrancapitan.org/foro/viewtopic.php?f=12&t=17519"
var v1 = "&start=";
var v2 = 1100;
var t1 = Date.now();

// 15630

let x = url+v1+v2;
let y = "./images_" + v2
const options = {
    urls: [x],
    directory: y,
    sources: [
        { selector: 'img', attr: 'src' }
    ]
};
scrape(options, (error, result) => {
    if(error){console.log(error)}
    else {
        var t2 = (Date.now() - t1) / 1000;
        console.log("Completed:" + t2 + "s")
    }}
);
v2 = v2 + 30

const fs = require("fs")