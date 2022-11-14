const express=require("express")
const app=express()
const router =require("./routes/userRoutes")
const connectDB=require("./config/connectDB")
connectDB()
app.get("/", (req,res)=>{
    res.send("HEllo NOde server")
})
app.use(router);

app.listen(8000,()=>{
    console.log("Server is runing at Port 8000")
})