/**
* Bu Javascript kodu
* Seçili resimleri karşılaştırıp dosyaya döküyor
* Seçili resimlern karşılaştırıp özelliklerini konsola yazıyor 
* Seçili resimi klasörde ki resimlerle karşılaştırıp dosyaya döküyor
* Seçili resimi klasörde ki resimlerle karşılaştırıp özelliklerini konsola yazıyor
* Seçili klasörde ki resimleri seçili resim ile karşılaştırıp dosyaya döküyor
* Seçili klasörde ki resimleri seçili resim ile karşılaştırıyor konsola yazıyor
*/

const fs = require("fs");
const compareImages = require('resemblejs/compareImages')
const path = require('path');
const readline = require('readline').createInterface({input: process.stdin, output: process.stdout});
var file = "./images/vr0.png"
var file2 = "./images/vr1.png"
var optionsTransparency = {output:{errorColor:{red:255,green:0,blue:255},errorType:"movement",transparency:0,useCrossOrigin:true,outputDiff:true,scaleToSameSize:true}};
var options = {output: {errorColor:{red:255,green:0,blue:255},errorType: "movement",transparency: 1,useCrossOrigin: true,outputDiff: true,scaleToSameSize: true}};
var option = null
var filepath = "./images"
var output = "./output/"
var details = null
//const http = require('http');const requestListener = function (req, res) {res.writeHead(200, {'Content-Type': 'text/html'});var f = fs.createReadStream(__dirname + "/uwu.html", "utf-8");f.pipe(res)} const server = http.createServer(requestListener); server.listen(8080);
function showDetails() {
    // Kullanıcıya detayları göstermeyi isteyip istemediğini soruyor. showData() içerisinde işlem görüyor
    readline.question('Show details? (Y/N) ', we => {
        if (we.toLowerCase() == "y") { details = true }
        else { details = false }
        compareTwoImages()
        readline.close()
    });
}
function showDiff(){
    // Output dosyaları için benzer yerleri saydam yapıp yapmayacağını soruyor
    readline.question('Only show difference? (Y/N) ', name => {
        if(name.toLowerCase() == "y") {option = optionsTransparency;}
        else{option = options;} 
        showDetails()
    });
}
function showData(arg1, arg2, arg3){
    // İşlem sonrası bilgileri gösteriyor
    console.log("Done! Completed in " + arg1.analysisTime + "ms");
    if(details == true) {
        if (arg1.isSameDimensions == false) {
            console.log("Are they both same dimensions: No")
            console.log(arg1.diffBounds)
            console.log(arg1.dimensionDifference)
        } else {
            console.log("Are they both same dimensions: Yes")
            console.log(arg1.diffBounds)
        }
        if (path.extname(arg2) == path.extname(arg3)) {
            console.log('Same Extension')
        }
        console.log("Difference: " + arg1.misMatchPercentage + "%")
        console.log("Saved the file")
        console.log("---------------------------")
    }
}
async function compareTwoImages() {
    // İki resim arasında ki farkları bulup bunları png'ye aktarıyor.
    let data = await compareImages(file, file2, option)
    let x = "." + "/output/" + "OUTPUT_" + path.parse(file2).name + ".png";
    fs.writeFile(x, data.getBuffer(), (err) => {
        if (err) throw err;
        showData(data, file, file2)
    })
}
async function compareTwoImagesStats() {
    // İki resim arasında ki farkları bulup konsola yazdırıyor.
    var data = await compareImages(file, file2, option)
    showData(data, file, file2)
    readline.close()
}
async function compareImageToFolder(){
    // Resimi klasör içerisinde ki resimleri karşılaştırıyor png'ye aktarıyor.
    fs.readdir(filepath, (err, files) => {
        if(err) console.log(err)
        readline.close()
        files.forEach(async function(file) {
            let fp = filepath + "/" + file
            let data = await compareImages("OUTPUT_avr1.png", fp, option)
            try {
                fs.accessSync('./output', fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                fs.mkdirSync('./output/')
                setTimeout(() => {}, 1500);
            }
            let x = output + "OUTPUT_" + path.parse(file).name + ".png";
            showData(data, file, file2)
            fs.writeFile(x, data.getBuffer(), (err) => {
                if (err) throw err;
            })
        })
    })
}
function compareImageToFolderStats(){
    // Resimi klasör içerisinde ki resimleri karşılaştırıyor konsola yazdırıyor.
    fs.readdir(filepath, (err, files) => {
        if (err) console.log(err)
        readline.close()
        files.forEach(async function (file) {
            let fp = filepath + "/" + file
            let data = await compareImages("OUTPUT_avr1.png", fp, option)
            showData(data, file, file2)
        })
    })
}
function compareFolderToFile(){
    // Klasör içerisinde ki resimleri resimi karşılaştırıyor png'ye aktarıyor
    fs.readdir(filepath, (err, files) => {
        if (err) console.log(err)
        readline.close()
        files.forEach(async function (file) {
            let fp = filepath + "/" + file
            let data = await compareImages(fp, "OUTPUT_avr1.png", option)
            try {
                fs.accessSync('./output', fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                console.error("File doesn't exist!")
            }
            let x = output + "OUTPUT_" + path.parse(file).name + ".png";
            showData(data, file, file2)
            fs.writeFile(x, data.getBuffer(), (err) => {
                if (err) throw err;
            })
        })
    })
}
function compareFolderToFileStats() {
    // Klasör içerisinde ki resimleri resimi karşılaştırıyor konsola yazdırıyor
    fs.readdir(filepath, (err, files) => {
        if (err) console.log(err)
        readline.close()
        files.forEach(async function (file) {
            let fp = filepath + "/" + file
            let data = await compareImages(fp, "OUTPUT_avr1.png", option)
            try {
                fs.accessSync('./output', fs.constants.R_OK | fs.constants.W_OK);
            } catch (err) {
                console.error("File doesn't exist!")
            }
            let x = output + "OUTPUT_" + path.parse(file).name + ".png";
            showData(data, file, file2)
            fs.writeFile(x, data.getBuffer(), (err) => {
                if (err) throw err;
            })
        })
    })
}
showDiff()