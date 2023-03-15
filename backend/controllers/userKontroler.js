const User=require('../models/userModel');
const jwt=require('jsonwebtoken');
require("dotenv").config();
const secret='ninjadojoshifuyoshimarioluigipeachbowser';

const createToken = (_id) => {
    return jwt.sign({_id}, secret, { expiresIn: '3d' })
  }



//login user
const loginUser=async(req,res)=>{
    const {email,password}=req.body;
    
    
    try {
        const user=await User.login(email,password);
//kreiranje tokena
const token = createToken(user._id)

const novi=user.role;
        res.status(200).json({email, token,novi });
    } catch (error) {
        res.status(400).json({err:error.message});
    }

}


//register user

const registerUser=async(req,res)=>{
    const {email, password,role,ime,prezime,broj_telefona,adresa,datum_zaposlenja,datum_otkaza}=req.body;

    try {
        const user=await User.signup(email, password,role,ime,prezime,broj_telefona,adresa,datum_zaposlenja,datum_otkaza);
//kreiranje tokena
const token = createToken(user._id)

        res.status(200).json({email,role,token});
    } catch (error) {
        res.status(400).json({err:error.message});
    }


   
}


module.exports={registerUser,loginUser};





