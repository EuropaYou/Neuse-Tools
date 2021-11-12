const fs = require("fs")
var filename = "./fileSize.js"
var stats = fs.statSync(filename);
var fileSize = null
var fileType = null
if (stats.size >= 1024) {
    if (stats.size / 1024 >= 1024) {
        fileSize = stats.size / 1024 / 1024
        fileType = "MB"
        if (stats.size / 1024 / 1024 >= 1024) {
            fileSize = stats.size / 1024 / 1024 / 1024
            fileType = "GB"
        } 
    }else {
        fileSize = stats.size / 1024
        fileType = "KB"
    }
}else {
    fileType = "B"
    fileSize = stats.size
}
console.log(fileSize, fileType)