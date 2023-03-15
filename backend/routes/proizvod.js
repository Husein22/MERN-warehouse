const express=require("express");
const{createProizvod,
    getJednuProizvod,
    getProizvodee,brisanjeProizvoda,updateProizvod
}=require("../controllers/proizvodKontroler")




const route=express.Router();
//za sve rute je potrebna autorizacija tokena
//route.use(requireAuth)

const Proizvod=require("../models/proizvodModel");


//get sve sirovine
route.get("/",getProizvodee);

//get posebnu sirovinu
route.get('/:id',getJednuProizvod);


//post za sirovinu
route.post('/',createProizvod
   // res.json({msg:"POST sve sirovinu"})

);



//delete za sirovinu
route.delete('/:id',brisanjeProizvoda);


//PATCH za sirovinu
route.patch('/:id',updateProizvod);




module.exports=route;




