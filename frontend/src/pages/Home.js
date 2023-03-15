import { useEffect,useState } from "react"

//components
import SirovineDetalji from "../components/SirovineDetalji"
import { useSirovineKontext } from "../hooks/koristitSirovineKontekst"

import FormaSir from "../components/FormaSir"

const Home = () => {
    //const [sirovina, setSirovina] = useState(null)
   const {sirovina,dispatch}= useSirovineKontext()
    useEffect(() => {
      const fetchSirovina = async () => {
        const response = await fetch('/api/sirovine')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type:'SET_SIROVINE',payload:json})
             //setSirovina(json)
         }
      }
  
      fetchSirovina()
    }, [])


    return (
<div className="home"


>    <div className="proizvodi">
      <div
      style={{  
        backgroundColor:"white",
        height:50,
 
      }}
      ><strong><h2 style={{textAlign:"center",color:"blue"}} > <u>Sirovine page</u></h2>  </strong></div><br/>
      {sirovina &&sirovina.map((sirovin)=>(
           <SirovineDetalji key={sirovin._id} sirovina={sirovin}/>
        ))}
      </div>
      <FormaSir />
    </div>




    )
}

export default Home