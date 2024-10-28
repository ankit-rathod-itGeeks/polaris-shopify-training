const getLogger=require('./getLogger')

let logger=null

if (process.env.NODE_ENV !== 'production') {
   logger=getLogger()
}

module.exports=logger
