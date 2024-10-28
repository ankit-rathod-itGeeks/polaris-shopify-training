const multer = require("multer")
console.log("1------------------");
const storage = multer.diskStorage({
     
    destination: (req, file, cb) => {
        console.log("2------------------");
      cb(null, "./utils/images")
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname)
    }, 
  })

  console.log("3--------");

  const uploadStorage = multer({ storage: storage })
  module.exports = uploadStorage