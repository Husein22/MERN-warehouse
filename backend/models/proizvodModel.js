const mongoose=require("mongoose");


const Schema=mongoose.Schema;
//id, naziv, slika_proizvoda (čuvati url slike), proizvodni_proces_id, marza, cijena
const  proizvodSema=new Schema({
   
    id:{
        type:Number,
        required: true
    },
    naziv:{
        type:String,
        required: true
    },
    slika_proizvoda:{
        type:String,
        required: true
    },
    proizvodni_proces_id:{
        type:Number,
        required: true
    },
    marza:{
        type:Number,
        required: true
    },
    cijena:{
        type:Number,
        required: true
    }

},{timeseries:true})


module.exports=mongoose.model('Proizvod',proizvodSema);















