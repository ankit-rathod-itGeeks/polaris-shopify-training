const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;
const { Loggly } = require('winston-loggly-bulk');



const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp}   ${level}: ${message}`;
  });




const getLogger=()=>{
    return   createLogger({
        level: 'debug',
        format:combine(
            format.colorize(),
            timestamp({format:'HH:mm:ss'}),
            myFormat
          ),
         
        transports: [
            new transports.Console(), 
            new Loggly({
              token: 'CLvNuw7lbxcZladnUpEyPB-NJQm4-jSoXRCgTOaxqm_e8LcO1-2bbUYIFzFxxIBHC0GdD8U',
              subdomain: 'ankitrathod', 
              tags: ['Winston-NodeJS'],
              json: true,
            }),
          ],
      });
}

module.exports=getLogger;