// const multer = require('multer');
// const MIME_Type = {
//     'image/jpg': 'jpg',
//     'image/jpeg': 'jpg',
//     'image/png': 'png'
// }
// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, 'images')
//     },
//     filename: (req, file, callback) => {
//         const extension = MIME_Type(file.mimetype);
//         callback(null, req.auth.userId + "." + Date.now() + "." + extension);
//     }
// })

// module.exports = multer(({ storage }).single('images'));



/* Import des modules necessaires */
const multer = require("multer");

// type d'image
const MIME_TYPES = {
    "image/jpg": "jpg",
    "image/jpeg": "jpg",
    "image/png": "png",
};

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "images");
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split(" ").join("_");
        const extension = MIME_TYPES[file.mimetype];
        callback(null, req.auth.userId + "." + Date.now() + "." + extension);
    },
});

module.exports = multer({ storage: storage }).single("image");

