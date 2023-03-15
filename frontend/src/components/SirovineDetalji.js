import { useSirovineKontext } from "../hooks/koristitSirovineKontekst";

const SirovineDetalji=({sirovina})=>{
const {dispatch}=useSirovineKontext();


const handleClick=async()=>{
const response=await fetch('api/sirovine/'+sirovina._id,{
  method:'DELETE',

})

const json=await response.json();

if(response.ok){
dispatch({type:'DELETE_SIROVINU',payload:json})

}if(!response.ok){

}

}

return(
    <div className="sirovine-details"
    style={{  
      backgroundImage: "url(" + "https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}
    >
        <h4>{sirovina.naziv}</h4>
      <p><strong>Kolicina ({sirovina.jedinica_mjere}): </strong>{sirovina.kolicina}</p>
      <p><strong>Cijena: </strong>{sirovina.cijena} KM</p>
      <p><strong>Jedinica mjere: </strong>{sirovina.jedinica_mjere}</p>
      <p><strong>Da li se koristi: </strong>{sirovina.da_li_se_koristi}</p>
      <p><strong>Minimalna kolicina: </strong>{sirovina.min_kolicina}</p>
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
)

}

export default SirovineDetalji;