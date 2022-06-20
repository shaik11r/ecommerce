 const expresss =require('express');
 const serverConfig=require('./configs/server.config');
 const app=expresss();
 app.listen(serverConfig.PORT,()=>{
    console.log(`APPLICATION STARTED on port no: ${serverConfig.PORT}`);
 }) 