const express=require('express');
const cors=require('cors');
const axios=require('axios');
const app=express();
require('dotenv').config()
app.use(express.json())
app.use(cors())

app.get("/test",(_,res)=>res.send({msg:"hello from server 1"}))

setInterval(() => {
    const  AwakeServer=async ()=>{
        try {
             const res=await axios.get(`${process.env.SERVER}/test`);
             console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }
    AwakeServer();
}, 2000);
app.listen(process.env.PORT,()=>{
    console.log(`server 1 listing on ${process.env.PORT}`)
})