import { useState } from "react";
import { useSirovineKontext } from "../hooks/koristitSirovineKontekst"


const FormaSir=()=>{

const {dispatch}=useSirovineKontext();

    const [id,setId]=useState('');
const [naziv,setNaziv]=useState('');
const [kolicina,setKolicina]=useState('');
const [min_kolicina,setMin_Kolicina]=useState('');
const [cijena,setCijena]=useState('');
const [jedinica_mjere,setjed_mjere]=useState('');
const [da_li_se_koristi,setKorisni]=useState('');
const [dobavljac_id,setDobavljacId]=useState('');


const [error, setError] = useState(null)
//id, naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljac_id

const handleSubmit=async(e)=>{
        e.preventDefault()
    
    
    
        const sirovina={id, naziv, kolicina, min_kolicina, cijena, jedinica_mjere, da_li_se_koristi, dobavljac_id}
  

    const response = await fetch('/api/sirovine', {
        method: 'POST',
        body: JSON.stringify(sirovina),
        headers: {
          'Content-Type': 'application/json'
        }
      })

    
    const json=await response.json();
    
    if(!response.ok){
        setError('[GRESKA] Svi elementi su obavezni!');

    }
    if(response.ok){
        setMin_Kolicina('');
        setKorisni('');
        setjed_mjere('')
        setKolicina('')
        setNaziv('');
        setId('');
        setCijena('');
    setDobavljacId('');
    setError(null);
        console.log("novi artikl uspjesno dodan",json)
        dispatch({type:'CREATE_SIROVINE',payload: json})
    }
    
    }


    return(
           <form className="create" onSubmit={handleSubmit}>
            <div className="dodavanje "
             style={{  
                marginTop:20,
                width:400,
                padding:10,
                backgroundImage: "url(" + "https://img.freepik.com/free-vector/smooth-white-wave-background_52683-55288.jpg?w=2000" + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}}
            >
        <h3>Dodavanje nove sirovine</h3>


   <label> Id artikla: </label>
   <input type="number" 
   onChange={(e)=>setId(e.target.value)}
   value={id}
   />

<label> Naziv artikla: </label>
<input 
        type="text" 
        onChange={(e) => setNaziv(e.target.value)} 
        value={naziv}
    />

<label>Trenurna kolicina artikla: </label>
   <input type="number" 
   onChange={(e)=>setKolicina(e.target.value)}
   value={kolicina} />


<label>Minimalna kolicina: </label>
   <input type="number" 
   onChange={(e)=>setMin_Kolicina(e.target.value)}
   value={min_kolicina} />


<label> Cijena artikla: </label>
   <input type="number" 
   onChange={(e)=>setCijena(e.target.value)}
   value={cijena} />

<label> Jedinica mjere artikla: </label>
   <input type="text" 
   onChange={(e)=>setjed_mjere(e.target.value)}
   value={jedinica_mjere} />


<label> Da li se koristi(da/ne): </label>
   <input type="text" 
   onChange={(e)=>setKorisni(e.target.value)}
   value={da_li_se_koristi} />


<label> DobavljacID: </label>
   <input type="text" 
   onChange={(e)=>setDobavljacId(e.target.value)}
   value={dobavljac_id} />

<button>Dodaj artikal </button>

{error && <div className="error">{error}</div>}
</div>
    </form>
)
    }

export default FormaSir