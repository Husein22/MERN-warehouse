
const db="mongodb+srv://husein:ministar123@cluster0.5o5czxa.mongodb.net/?retryWrites=true&w=majority";

const sirovineeRoute=require('./routes/sirovine');
const userRoute=require('./routes/user')
const userDobavljaci=require('./routes/dobavljac')
const proizvodRoute=require('./routes/proizvod')
require("dotenv").config();

const PORT= process.env.PORT ||4000;

require('dotenv').config();
const mongose=require("mongoose")



const express=require("express");



//express app
const app=express();


//middleware
app.use(express.json());
//pretvara sve req u json format



app.use((req,res,next)=>{
  console.log(req.path,req.method);
  next();  

})


//konekcija sa bazom
mongose.set("strictQuery", false);
mongose.connect(db) 
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Uspjesno konektovano na db i slusa se na portu ${PORT} `,);
    })

})
.catch((err)=>{
    console.log(err);
})


//routes
app.use('/api/sirovine/',sirovineeRoute);
app.use('/api/user',userRoute);
app.use('/api/dobavljaci/',userDobavljaci);
app.use('/api/proizvod',proizvodRoute);













