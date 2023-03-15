import { SirovineKontekst } from "../context/SirovineContext";
import { useContext} from "react";




export const  useSirovineKontext=()=>{
    const context=useContext(SirovineKontekst);
 
 if(!context){
    throw Error("UseSirovineKontekst mora biti u SirovineKontexProvider");
 }

    return context;
}


