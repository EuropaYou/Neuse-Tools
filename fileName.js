const fs = require("fs")
const path = require("path")
let ext = null;
var filepath = "./node_modules/canvas/src"

fs.readdir(filepath, (err, files) => {
    if(err){
        console.error(err)
    }else {
        files.forEach(function (file) {
            files.forEach(function(file2) {
                if(path.extname(file) != path.extname(file2)) {
                    if (path.basename(filepath + "/" + file2, path.extname(file2)) == path.basename(filepath + "/" + file, path.extname(file))) {
                        console.log("Found repeating file names:",file, file2)
                    }
                }
                // check if folder
                // check if folder has sub-folders
                if (fs.lstatSync(filepath+"/"+file2).isDirectory() == true) {
                } else {
                    if(file != file2){
                        if(path.extname(file) == path.extname(file2)) {
                            //console.log(file,file2)
                        }
                    }
                }
            })
        })
    }
})