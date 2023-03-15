import { useState } from "react"
import { useSignup } from "../hooks/useSigup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ime, setIme] = useState('')
  const [prezime, serPrezime] = useState('')
  const [brojTel, setBrojTel] = useState('')
  const [adresa, setAdresa] = useState('')
  const [datum_zaposlenja, setDatumZaposlenja] = useState('')
  const [datum_otkaza, serDatumOtkaza] = useState('')

  const {signup, error, isLoading} = useSignup()
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(ime,prezime,email,password, brojTel,adresa,datum_zaposlenja,datum_otkaza)
    await signup(ime,prezime,email,password, brojTel,adresa,datum_zaposlenja,datum_otkaza);
    
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
        <div className="nesto" >
      <h3>Sign Up</h3>
      
      <label>Ime:</label>
      <input 
        type="text" 
        onChange={(e) => setIme(e.target.value)} 
        value={ime} 
      />


      <label>Prezime:</label>
      <input 
        type="text" 
        onChange={(e) => serPrezime(e.target.value)} 
        value={prezime} 
      />

<label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />


      <label>Broj telefona:</label>
      <input 
        type="text" 
        onChange={(e) => setBrojTel(e.target.value)} 
        value={brojTel} 
      />
      <label>Adresa:</label>
      <input 
        type="text" 
        onChange={(e) => setAdresa(e.target.value)} 
        value={adresa} 
      />
      <label>Datum zaposlenja:</label>
      <input 
        type="date" 
        onChange={(e) => setDatumZaposlenja(e.target.value)} 
        value={datum_zaposlenja} 
      />
      <label>Datum otkaza:</label>
      <input 
        type="date" 
        onChange={(e) => serDatumOtkaza(e.target.value)} 
        value={datum_otkaza} 
      />


<button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      </div>
    </form>
  )
}

export default Signup