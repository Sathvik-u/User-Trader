const exp=require('express');
const app=exp();
const router=exp.Router();

app.listen(4000,()=>console.log("server started at port 4000...."));


//mongo client
const mclient=require("mongodb").MongoClient;
mclient.connect("mongodb://127.0.0.1:27017/projectdb")
.then((dbRef)=>{
    const projectDb=dbRef.db("projectDb")
    const transporters=projectDb.collection("transporters")
    const manufacturers=projectDb.collection("manufacturers")
    app.set("manufacturers",manufacturers)
    app.set("transporters",transporters)
    console.log("connected to database successfully...")

})
.catch((err)=>console.log("error connecting to database",err))


//importing apis
const transportersApp=require("./APIs/transporters")
app.use("/transporters",transportersApp);
const manufacturersApp=require("./APIs/manufacturers")
app.use("/manufacturers",manufacturersApp);








//invalid paths
const invalidPaths=(request,response,next)=>{
    response.send({message:"invalid path"})
}
app.use("*",invalidPaths);


//error handling
const errorHandling=(error,request,response,next)=>{
    response.send({message:error.message})
}
app.use(errorHandling);


module.exports=router;