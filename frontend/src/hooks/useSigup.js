import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {

  const { dispatch } = useAuthContext()

  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)

 

  const signup = async (ime,prezime,email,password, broj_telefona,adresa,datum_zaposlenja,datum_otkaz) => {
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/user/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ime,prezime,email,password, broj_telefona,adresa,datum_zaposlenja,datum_otkaz })
    })
    const json = await response.json()
    console.log( ime,prezime,email,password, broj_telefona,adresa,datum_zaposlenja,datum_otkaz);

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // cuvanje lokalno
      localStorage.setItem('user', JSON.stringify(json))

      // azuriranje  auth contexta
      dispatch({type: 'LOGIN', payload: json})

      // azuriranje loading state
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}