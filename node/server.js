const express=require ("express")
const app=express()
app.get('/',function(req,resp){
    resp.sendFile('public/index.html',{root:__dirname})
})
app.listen(3000);