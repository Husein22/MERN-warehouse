const mongoose=require("mongoose");


const Schema=mongoose.Schema;
//id, naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljac_id
const sirovinaSema=new Schema({
   
    id:{
        type:Number,
        required: true
    },
    naziv:{
        type:String,
        required: true
    },
    kolicina:{
        type:Number,
        required: true
    },
    min_kolicina:{
        type:Number,
        required: true
    },
    cijena:{
        type:Number,
        required: true
    },
    jedinica_mjere:{
        type:String,
        required: true
    },
    da_li_se_koristi:{
        type:String,
        required: true
    },
    dobavljac_id:{
        type:Number,
        required: true
    },

},{timeseries:true})


module.exports=mongoose.model('Sirovine',sirovinaSema);















