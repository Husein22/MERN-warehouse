const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const validator=require('validator');
const { use } = require('../routes/sirovine');
const Schema=mongoose.Schema;

const userSchema=new Schema({
email:{
    require:true,
    type:String,
    unique:true
},
password:{
    require:true,
    type:String,
},
role:{
    type:String,
    default:"user",
},password:{
  require:true,
  type:String,
},
ime:{
  require:true,
  type:String,
},prezime:{
  require:true,
  type:String,
},broj_telefona:{
  require:true,
  type:String,
},adresa:{
  require:true,
  type:String,
},datum_zaposlenja:{
  require:true,
  type:String,
},datum_otkaza:{
  type:String,
},

})


//static register metod



userSchema.statics.signup = async function(email, password,role,ime,prezime,broj_telefona,adresa,datum_zaposlenja,datum_otkaza ) {

    const exists = await this.findOne({ email })
  if(!email || !password || !ime ||!prezime || !broj_telefona||!adresa||!datum_zaposlenja ){
    throw Error("Moraju sva polja biti popunjena!")
  }
  if(!validator.isEmail(email)){
    throw Error("Email nije validan!")
  }
  if(!validator.isStrongPassword(password)){
    throw Error("Password nije dovoljno  'jak' !")
  }


    if (exists) {
      throw Error('Email already in use')
    }
  
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
  
    const user = await this.create({ email, password: hash ,role,ime,prezime,broj_telefona,adresa,datum_zaposlenja,datum_otkaza})
  
    return user
  }


//static login metoda

userSchema.statics.login=async function (email, password){
  if(!email || !password){
    throw Error("Moraju sva polja biti popunjena!")
  }
  const user = await this.findOne({ email })
 
  if (!user) {
    throw Error('Netacan email')
  }

  if (user.datum_otkaza!=undefined) {
    throw Error('Ova osoba je otpusena iz firme')
  }

const poredjenje=await bcrypt.compare(password,user.password);

if(!poredjenje){
  throw Error('Netacna sifra')
}
return user;


}







module.exports=mongoose.model('User',userSchema);