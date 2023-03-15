import { useEffect, useState} from "react";
import DobavljacDetalji from "../components/DobavljacDetalji";

const DobavljacPage=()=>{
const [dobavljac,setDobavljac]=useState(null);
useEffect(()=>{
const fetchDobavljaci=async()=>{
const response=await fetch('/api/dobavljaci/')
const json=await response.json();

if(response.ok){
setDobavljac(json);
}


}
fetchDobavljaci();
},[])

return(
    <div className="home">
          
      <div className="dobavljac">
      <div
      style={{  
        backgroundColor:"white",
        height:50,
        textAlign:"center",
        width:1400
      }}
      ><strong><h2 style={{color:"blue"}}> <u>Dobavljaci page</u></h2>  </strong></div><br/>
        {dobavljac && dobavljac.map(dob => (
            <DobavljacDetalji key={dob._id}  dobavljac={dob} />
          
        ))}
      </div>
    </div>
)


}

export default DobavljacPage;
