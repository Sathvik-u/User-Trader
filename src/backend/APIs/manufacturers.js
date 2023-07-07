const exp=require("express")
const manufacturersApp=exp.Router()

manufacturersApp.use(exp.json())


//show all manufacturers
manufacturersApp.get("/all",(request,response)=>{
    const manufacturersObj=request.app.get(manufacturers)
    manufacturersObj.find().toArray()
    .then((data)=>{
        response.status(201).send({message:"all manufacturers",payload:data})
    })
    .catch((err)=>response.send({message:"error",errMessage:err}))
})


















module.exports=manufacturersApp;