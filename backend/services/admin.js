const Users=require('../models').user
const bcrypt=require('bcrypt')

const { where } = require('sequelize')
const { book, issueBook, user } = require('../models')



exports.register=async (req,res)=>{
    try {
        console.log("------------------register api----------------------------");
    
        const password= bcrypt.hashSync(req.body.password,10)
        const result=await  Users.create({...req.body,password:password})
       
        
       
        return {
            status:true,result:result
        }

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}
exports.login=async (req,res)=>{
    try {
        console.log("------------------login api----------------------------");
        // const password=await bcrypt.hashSync(req.body.password,10)
       
        const response=await Users.findOne({where:{email:req.body.userName }})
     
     
      if(response){
      

        const isPasswordCorrect=await bcrypt.compare(req.body.password,response.password)
       console.log(isPasswordCorrect);
        if(isPasswordCorrect){
            return {
                status:true,
                result:response 
            }

        }
       else{
        return {
            status:false
        }
       }
        
      }
      else{
        return {
            status:false,

        }
      }
       
       

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}


exports.addBook=async (req,res)=>{
    try {
        console.log("------------------add book api----------------------------");
       
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
       
       

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}


exports.issueBook=async (req,res)=>{
    try {
        console.log("------------------issue book api----------------------------");
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
       
       

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}

exports.assignedBooks=async (req,res)=>{
    try {
       
        console.log("------------------asssigned books api----------------------------");

       
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
       
       

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}


exports.allBooks=async (req,res)=>{
    try {
       
        console.log("------------------all books api----------------------------");
     
       
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
       
       

    } catch (error) { console.log(error)
        return {
            status:false,result:error
        }
    }
}

exports.allUsers=async (req,res)=>{
    try {
       
        console.log("------------------all users api----------------------------");
       
        const response=await Users.findAndCountAll({
            where:{role:'Student'},
            order: [
                ['id', 'DESC'],
               
            ],
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
        console.log(error);
        return {
            status:false,result:error
        }
    }
}


exports.allIssuedBooks=async (req,res)=>{
    try {
        console.log("------------------all issued books api----------------------------");
     
       
        const response=await issueBook.findAndCountAll()
     
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
        console.log(error);
        return {
            status:false,result:error
        }
    }
}

exports.submitBook=async (req,res)=>{
    try {
       
        console.log("------------------submit book api----------------------------");
       
        const response=await issueBook.destroy({
        where:{
            userId:req.body.userId,
            bookId:req.body.bookId
             

         }})
     
   
       
       
        return {
            status:true,
            result:response
        
      }
    
       
       

    } catch (error) { 
        console.log(error);
        return {
            status:false,result:error
        }
    }
}

exports.updateStatus=async (req,res)=>{
    try {
        console.log("------------------update status api----------------------------");
       
     console.log(req.body);
       
        const response=await user.update({status:req.body.status},{
            where:{id:req.body.userId}})
     
   
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
        console.log(error);
        return {
            status:false,result:error
        }
    }
}
