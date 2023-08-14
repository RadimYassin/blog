// configured  muller
const muller=require("multer")
// filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
const storage = muller.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/imgs")
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname
        cb(null, uniqueSuffix)
    }
});

const uploads = muller({ storage })


module.exports = {uploads}