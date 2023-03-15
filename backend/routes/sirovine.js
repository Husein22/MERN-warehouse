const express=require("express");
const{createSirovinu
    ,getSirovine,
    getJednuSirovuinu,brisanjeSirovine,updateSirovinu
}=require("../controllers/sirovineKontroler")
const requireAuth=require("../middleware/requireAuth")




const route=express.Router();
//za sve rute je potrebna autorizacija tokena
//route.use(requireAuth)

const Sirovine=require("../models/sirovineModul");


//get sve sirovine
route.get("/",getSirovine);

//get posebnu sirovinu
route.get('/:id',getJednuSirovuinu);


//post za sirovinu
route.post('/',createSirovinu
   // res.json({msg:"POST sve sirovinu"})

);



//delete za sirovinu
route.delete('/:id',brisanjeSirovine);


//PATCH za sirovinu
route.patch('/:id',updateSirovinu);




module.exports=route;




