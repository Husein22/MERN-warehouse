const Dobavljac=require("../models/dobavljacModels");
const mongose=require("mongoose");

// get sve sirovine

const getDobacljace=async(req,res)=>{
    const dobavljac=await Dobavljac.find({});
res.status(200).json(dobavljac);

}


 //get posebnu sirovinu

 const getJednuDobavljac=async(req,res)=>{
    const {id}=req.params;

    const dobavljac=await Dobavljac.findById(id);

    if(!mongose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"id greska"}); 
    }


    if(!dobavljac){
        return res.status(404).json({err:"Nema te sirovine"});
    }else{
        res.status(200).json(dobavljac);
    }

 }

 //post odredjenu sirovinu

 const createDobavljac=async (req,res)=>{
    const { id, naziv, jib , pdv , broj_telefona,kontakt_osoba, email_adresa, datum_pocetka, datum_zavrsetka}=req.body;

    //dodavanje u bazu
try {
    const dobavljac=await Dobavljac.create({id, naziv, jib , pdv , broj_telefona,kontakt_osoba, email_adresa, datum_pocetka, datum_zavrsetka});
res.status(200).json(dobavljac);

} catch (err) {
    res.status(400).json({err:err.message})
}

 }



//brisanje sirovine
const brisanjeDobavljaca=async(req,res)=> {
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    

    const dobavljac = await Dobavljac.findOneAndDelete({_id: id})

if(!dobavljac){
    return res.status(400).json({error: 'No such workout'})
}else{
    res.status(200).json(dobavljac);
}

}



//update sirovine
const updateDobavljac=async(req,res)=>{
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    
    const dobavljac=await Dobavljac.findByIdAndUpdate({_id:id},
        {...req.body}
        )

        if(!dobavljac){
            return res.status(404).json({err:"Nema te sirovine"});
        }else{
            res.status(200).json(dobavljac);
        }
}









module.exports={
    createDobavljac,
    getDobacljace,
    getJednuDobavljac,brisanjeDobavljaca,updateDobavljac
}
