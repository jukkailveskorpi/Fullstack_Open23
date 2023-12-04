import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherApp from './WeatherApp'

const App = () => {
  const [ searchFilter, setSearchFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
       setCountries(res.data)
    });
  }, []);

  const filteredCountries = countries.filter(country => country.name && country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
 
  return (
    <div>
      find countries <input value={searchFilter} onChange={e => setSearchFilter(e.target.value)} />
      <ShowResults filteredCountries={filteredCountries} setSearchFilter={setSearchFilter} />
      <WeatherApp />
    </div>
  )
}

const ShowResults = ({ filteredCountries, setSearchFilter }) => {
  const showCountryDetails = (country) => {
    setSearchFilter(country.name.common)
  }

  if (filteredCountries.length === 1) {
    const country = filteredCountries[0]

    //const languages = Obejct.values(country.languages);  //<div>capital: {country.capital && country.capital.common}</div>
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>capital: {country.capital}</div>
        <div>population: {country.population}</div>
        <h1>Languages </h1>
        <ul>
          {Object.keys(country.languages).map(key => (
             <li key={key}>{country.languages[key]}</li>))}
        </ul>
        <div className='image'>
          {country.flags && country.flags.png && (
        <img src={country.flags.png} alt={country.name.common} className="country-flag" />
        )}
        </div>
        </div>
    )
  }
   if (filteredCountries.length > 10) return <div>Too many matches, try again</div>
   return filteredCountries.map(country => {
          return (
          <div key={country.name.common}>
            {country.name.common} <button onClick={() => showCountryDetails(country)}>show</button>
            </div>
            )
  })
}

export default App


