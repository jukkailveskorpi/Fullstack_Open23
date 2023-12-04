
 // const [data, setData] = useState({})
  //const [location, setLocation] = useState('')
 // const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`

 
/*useEffect(() => {
  if (location) {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }
}, [location]);

const updateSearchFilter = (newValue) => {
  setSearchFilter(newValue);
};*/

 /* return (
    <div className="app">
      <div className="container">
      <div className="top">
      <div className="location">
      <p>{data.name}</p>
      </div>
      <div className="temp">
         {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
      </div>
      <div className="descripton">
        <p>{data.weather ? <p>{data.weather[0].main}</p> : null}</p>
      </div>
      </div>

      {data.name !== undefined && (
      <div className="bottom">
        <div className="feels">
             {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
        </div>
        <div className="humidity">
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
          <p>Humidity</p>
        </div>
        <div className="wind">
        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
        </div>
      </div>
      )}
    </div>
    </div>
  )
}

const ShowResults = ({ filterdCountries, handleCountrySelection }) => {
  if (filterdCountries.length === 1) {
    const country = filterdCountries[0]
    handleCountrySelection(country); 
    return (
      <div>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>population {country.population}</div>
        <div>area {country.area}</div>
        <h1>languages</h1>
        <ul>
          {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt={country.name} width='20%' />
      </div>
    )
  }
  if (filterdCountries.length > 10) return <div>Too many matches, specify another filter </div>

  return filterdCountries.map((country) => {
  return (
    <div key={country.name}>
      {country.name} 
      </div>
  )
})
} */



  


/*const App = () => {

  const [ countries, setCountries ] = useState([])
  const [ searchFilter, setSearchFilter ] = useState('')

  //open weather url
  //const url="https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ead038bbc72fbd1287422f587030fee1"


    useEffect(() => {
    // haetaan maa data
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
    <ShowResults filterdCountries={filteredCountries} setSearchFilter={setSearchFilter}/> 
   </div>
  )
}

const ShowResults = ({filterdCountries, setSearchFilter}) => {
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
          {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt={country.name} width='20%' />
      </div>
    )
  }
  if (filterdCountries.length > 10) return <div>Too many matches, specify another filter </div>

  
  return filterdCountries.map(country => {
  return (
    <div key={country.name}>
      {country.name} <button value={country.name} onClick={(e) => setSearchFilter(e.target.value)}>show</button>
      </div>
  )
})
}*/


//export default App

 /*<h1>Weather in {country.capital}</h1>
        <div>Temperature: {country.weather.main.temp} C </div>
        <div>Weather: {country.weather.weather[0].description}</div>*/









