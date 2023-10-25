import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ countries, setCountries ] = useState([])
  
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
    setCountries(res.data)
    })
  },[])
 
  const filteredCountries = countries.filter(country => 
  country.name.toLowerCase().includes(searchFilter.toLowerCase())
  )
  
  return (
   <div>
    Find countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />   
    <ShowResults filterdCountries={filteredCountries} /> 
   </div>
  )
}

const ShowResults = ({filterdCountries}) => {
  if (filterdCountries.length === 1) {
    const country = filterdCountries[0]
    return (
      <div>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <div>area {country.area}</div>
        <h1>languages</h1>
        <ul>
          {country.languages.map(language => <li>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt={country.name} width='20%' />
      </div>
    )
  }
  if (filterdCountries.length > 10) return <div>Too many matches, specify another filter </div>
  return filterdCountries.map(country => <div key={country.name}>{country.name}</div>)
}

export default App









