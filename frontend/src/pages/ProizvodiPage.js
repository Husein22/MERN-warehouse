import { useEffect, useState} from "react";
import ProizvodiDetalji from "../components/ProizvodDetalji";

const ProizvodPage=()=>{
const [proizvodi,setProizvodi]=useState(null);
useEffect(()=>{
const fetchDobavljaci=async()=>{
const response=await fetch('/api/proizvod/')
const json=await response.json();

if(response.ok){
setProizvodi(json);
}


}
fetchDobavljaci();
},[])

return(
    <div className="home">
      <div className="proizvodi">
      <div
      style={{  
        backgroundColor:"white",
        height:50,
        textAlign:"center",
        width:1400
      }}
      ><strong><h2 style={{color:"blue"}}> <u>Proizvod page</u></h2>  </strong></div><br/>
      
        {proizvodi && proizvodi.map(pro => (
           <ProizvodiDetalji key={pro._id}  proizvod={pro} />
        ))}
      </div>
    </div>
)


}

export default ProizvodPage;
