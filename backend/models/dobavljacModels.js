const mongoose=require("mongoose");


const Schema=mongoose.Schema;
//id, naziv, jib (jedinstveni identifikacioni broj), pdv (pdv broj), broj_telefona,
//kontakt_osoba, email_adresa, datum_pocetka, datum_zavrsetka
const  dobavljacSema=new Schema({
   
    id:{
        type:Number,
        required: true
    },
    naziv:{
        type:String,
        required: true
    },
    jib:{
        type:String,
        required: true
    },
    pdv:{
        type:Number,
        required: true
    },
    broj_telefona:{
        type:String,
        required: true
    },
    kontakt_osoba:{
        type:String,
        required: true
    },
    email_adresa:{
        type:String,
        required: true
    },
    datum_pocetka:{
        type: String,
        required: true
    },
    datum_zavrsetka:{
        type:String,
        required: true
    },

},{timeseries:true})


module.exports=mongoose.model('Dobavljac',dobavljacSema);















