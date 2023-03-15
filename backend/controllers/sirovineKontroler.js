const Sirovina=require("../models/sirovineModul");
const mongose=require("mongoose");

// get sve sirovine

const getSirovine=async(req,res)=>{
    const sirovina=await Sirovina.find({});
res.status(200).json(sirovina);

}


 //get posebnu sirovinu

 const getJednuSirovuinu=async(req,res)=>{
    const {id}=req.params;

    const sirovina=await Sirovina.findById(id);

    if(!mongose.Types.ObjectId.isValid(id)){
        return res.status(404).json({err:"id greska"}); 
    }


    if(!sirovina){
        return res.status(404).json({err:"Nema te sirovine"});
    }else{
        res.status(200).json(sirovina);
    }

 }

 //post odredjenu sirovinu

 const createSirovinu=async (req,res)=>{
    const {id, naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljac_id}=req.body;

    //dodavanje u bazu
try {
    const sirovine=await Sirovina.create({id, naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljac_id});
res.status(200).json(sirovine);

} catch (err) {
    res.status(400).json({err:err.message})
}

 }



//brisanje sirovine
const brisanjeSirovine=async(req,res)=> {
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    

    const sirovina = await Sirovina.findOneAndDelete({_id: id})

if(!sirovina){
    return res.status(400).json({error: 'No such workout'})
}else{
    res.status(200).json(sirovina);
}

}



//update sirovine
const updateSirovinu=async(req,res)=>{
    const {id}=req.params;
    if(!mongose.Types.ObjectId.isValid(id)){
    
        return res.status(404).json({err:"id greska"}); 
    }  
    
    const sirovina=await Sirovina.findByIdAndUpdate({_id:id},
        {...req.body}
        )

        if(!sirovina){
            return res.status(404).json({err:"Nema te sirovine"});
        }else{
            res.status(200).json(sirovina);
        }
}









module.exports={
    createSirovinu,
    getSirovine,
    getJednuSirovuinu,brisanjeSirovine,updateSirovinu
}
