const fs = require('fs');
const {extname,resolve} = require('path')
const {diskStorage} = require('multer');
let destination = folder => (req, file, callback) =>{
    let path = resolve(__dirname,folder)
    if(!fs.existsSync(path)){
        fs.mkdirSync(path)
    }
    return callback(null, path)
} 
let filename = (req, file, callback) => callback(null, file.fieldname + '-' + Date.now() +extname(file.originalname));
const storage = folder => diskStorage({
    destination: destination(folder),
    filename: filename
});

module.exports = storage;