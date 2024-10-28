const path = require("path");
const { requestedBooks, book, user } = require("../models");
const fs=require('fs')

exports.getAllrequestedBooks = async (req) => {
  const result = await requestedBooks.findAll({
    where: { userId: req.params.id },
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: book,
        attributes: ["bookName"],
      },
    ],
  });
  if (result) {
    return {
      status: true,
      result: result,
    };
  }
};


exports.uploadProfileImage = async (req) => {
//   console.log(req.params.id);

//   // const image =req.files
// console.log("req.file is ---",req.file);
// const fileData=await fs.readFileSync(req.file.path)
// console.log("fileDta--",fileData);
// const binary=Buffer.from(fileData)

 

// console.log("binary--",binary);
// const parentDirectory = path.join(__dirname, "/utils")
// const outputPath=path.join(path.join(parentDirectory))
// console.log(outputPath);

// await fs.writeFile(outputPath,binary)
// console.log("success--",outputPath);



const url=process.env.host + req?.file?.filename

 
 
  
  let result=await user.update({imageURL:url},{where:{id:req.params.id}})
console.log(req.file?.filename);
  if (result) {
    return {
      status: true,
      result: result,
    };
  }
};


exports.getProfileImage = async (req) => {
  console.log(req.params.id);

 
  
  let result=await user.findOne({
    
    where:{id:req.params.id},
    attributes:['imageURL']
  
  })
 
  if (result) {
    return {
      status: true,
      result: result,
    };
  }
};
