const express=require("express");
const{createDobavljac
    ,getDobacljace,
    getJednuDobavljac,brisanjeDobavljaca,updateDobavljac
}=require("../controllers/dobavljacKontroler")
const requireAuth=require("../middleware/requireAuth")




const route=express.Router();
//za sve rute je potrebna autorizacija tokena
//route.use(requireAuth)

const Dobavljac=require("../models/dobavljacModels");


//get sve sirovine
route.get("/",getDobacljace);

//get posebnu sirovinu
route.get('/:id',getJednuDobavljac);


//post za sirovinu
route.post('/',createDobavljac
   // res.json({msg:"POST sve sirovinu"})

);



//delete za sirovinu
route.delete('/:id',brisanjeDobavljaca);


//PATCH za sirovinu
route.patch('/:id',updateDobavljac);




module.exports=route;




