const user=require('../models').user
const bcrypt=require('bcrypt')

const { where } = require('sequelize')
const { book, issueBook } = require('../models')



exports.register=async (req,res)=>{
    try {
    
        const password= bcrypt.hashSync(req.body.password,10)
        const result=await  user.create({...req.body,password:password})
       
        
       
        return {
            status:true,result:result
        }

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}
exports.login=async (req,res)=>{
    try {
       
        // const password=await bcrypt.hashSync(req.body.password,10)
       
        const response=await user.findOne({where:{userName:req.body.userName}})
     
      if(response){
        const isPasswordCorrect=(req.body.password==response.password)
       
        return {
            status:true
        }
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}


exports.addBook=async (req,res)=>{
    try {
       
       console.log(req.body);
       
        const response=await book.create({...req.body})
     
      if(response){
       
       
        return {
            status:true,
            result:response
        }
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}


exports.issueBook=async (req,res)=>{
    try {
       
       console.log(req.body);
       
        const response=await issueBook.create({...req.body})
     
      if(response){
       
       
        return {
            status:true,
            result:response
        }
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}

exports.assignedBooks=async (req,res)=>{
    try {
       
      console.log(req.params.id);
       
        const response=await issueBook.findAll({
            where:{
                userId:req.params.id
            },
            include:[{
                model:book
            }]
        })
     
      if(response){
       
       
        return {
            status:true,
            result:response
        }
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}


exports.allBooks=async (req,res)=>{
    try {
       
     
       
        const response=await book.findAndCountAll()
     
      if(response){
       
       
        return {
            status:true,
            result:response
        }
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { 
        return {
            status:false,result:error
        }
    }
}
