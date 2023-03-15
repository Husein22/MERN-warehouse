const Proizvod=require("../models/proizvodModel");
const mongose=require("mongoose");

// get sve sirovine

const getProizvodee=async(req,res)=>{
    const proizvod=await Proizvod.find({});
res.status(200).json(proizvod);

}


 //get posebnu sirovinu

 const getJednuProizvod=async(req,res)=>{
    const {id}=req.params;

    const proizvod=await Proizvod.findById(id);

    if(!mongose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"id greska"}); 
    }


    if(!proizvod){
        return res.status(404).json({err:"Nema te sirovine"});
    }else{
        res.status(200).json(proizvod);
    }

 }

 //post odredjenu sirovinu

 const createProizvod=async (req,res)=>{
    const { id, naziv, slika_proizvoda , proizvodni_proces_id, marza, cijena}=req.body;

    //dodavanje u bazu
try {
    const proizvod=await Proizvod.create({id, naziv, slika_proizvoda , proizvodni_proces_id, marza, cijena});
res.status(200).json(proizvod);

} catch (err) {
    res.status(400).json({err:err.message})
}

 }



//brisanje sirovine
const brisanjeProizvoda=async(req,res)=> {
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    

    const proizvod = await Proizvod.findOneAndDelete({_id: id})

if(!proizvod){
    return res.status(400).json({error: 'No such workout'})
}else{
    res.status(200).json(proizvod);
}

}



//update sirovine
const updateProizvod=async(req,res)=>{
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    
    const proizvod=await Proizvod.findByIdAndUpdate({_id:id},
        {...req.body}
        )

        if(!proizvod){
            return res.status(404).json({err:"Nema te sirovine"});
        }else{
            res.status(200).json(proizvod);
        }
}









module.exports={
    createProizvod,
    getJednuProizvod,
    getProizvodee,brisanjeProizvoda,updateProizvod
}
