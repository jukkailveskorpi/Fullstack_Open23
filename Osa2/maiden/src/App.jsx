import {useState, useEffect} from 'react';
import axios from 'axios'
import TextField from './components/TextField';
import Countries from './components/Countries';

const App = () => {

  // Application's state
  const [countries, setCountries] = useState([])
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState([])
  const [newFilter, setNewFilter] = useState('')
  //const [newAccessKey, setNewAccessKey] = useState('')

  // Application's effect
  useEffect(() => {
  axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      setCountries(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  useEffect(() => {
    if (capital) {
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`)
    .then(response => {
        setWeather(response.data)
    })
    .catch((error) => {
      console.error(error);
    })
  }
  }, [capital])

  // Application's handlers
 // const handleAccessKeyChange = (event) => setNewAccessKey(event.target.value)
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  };

    /*if(weather.hasOwnProperty('error')) {
      alert(`${weather.error.type}`)
    } else {
      setNewFilter(event.target.value)
    }
  }*/
  const showCountry = (event) => {
    event.preventDefault()
    setNewFilter(event.target.value)
  }
  const handleCountryChange = (capital) => setCapital(capital)

  return (
    <div>
     {/*<TextField 
        text='Enter your weatherstack.com access key first' 
        value={newAccessKey} 
        onChange={handleAccessKeyChange} 
        />*/}
      <br />
      <TextField 
        text='find countries' 
        value={newFilter} 
        onChange={handleFilterChange} 
      />
      <Countries 
        filter={newFilter} 
        countries={countries}
        weather={weather} 
        showCountry={showCountry}
        handleCountryChange={handleCountryChange}
      />
    </div>
  )
}

export default App;



















/*import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    axios.get("https://restcountries.com/v2/all", { timeout: 5000, cancelToken: source.token })
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          console.log("Request timed out");
        } else {
          console.error(error);
        }
      });

    return () => {
      source.cancel("Request canceled by cleanup");
    };
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetchWeatherData(selectedCountry.capital);
    }
  }, [selectedCountry]);

  const handleCountrySelection = (country) => {
    setTimeout(() => {
      setSelectedCountry(country);
    });
  };

  const fetchWeatherData = (capital) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData(response.data);
    });
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  // Clear the weather data when search filter is empty
  useEffect(() => {
    if (searchFilter === '') {
      setWeatherData(null);
    }
  }, [searchFilter]);

  return (
    <div>
      <div>
        Find countries <input value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
      </div>
      <ShowResults filterdCountries={filteredCountries} handleCountrySelection={handleCountrySelection} />
      {weatherData && <W data={weatherData} />}
    </div>
  );
};

function W({ data }) {
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main && <h1>{data.main.temp.toFixed()}°C</h1>} 
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}</p>}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main && <p className='bold'>{data.main.feels_like.toFixed()}°C</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main && <p className='bold'>{data.main.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind && <p className='bold'>{data.wind.speed.toFixed()} MPH</p>}
              <p>Wind Speed</p>
            </div>
            </div>
            )}
      </div>
    </div>
  );
}

const ShowResults = ({ filterdCountries, handleCountrySelection }) => {
  if (filterdCountries.length === 1) {
    const country = filterdCountries[0];
    handleCountrySelection(country); // Automatically select the country and fetch weather data
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
    );
  }
  if (filterdCountries.length > 10) return <div>Too many matches, specify another filter </div>;

  return filterdCountries.map((country) => {
    return (
      <div key={country.name}>
        {country.name} <button onClick={() => handleCountrySelection(country)}>show</button>
      </div>
    );
  });
}

export default App;





import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]);
  const [searchFilter, setSearchFilter] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

/*  useEffect(() => {
    axios.get("https://restcountries.com/v2/all"), { timeout: 5000})
     then((res) => {
      setCountries(res.data);
    });
    .catch((error) => {
      if (axios.isCancel(error)) {
        // Handle timeout error
      console.log("Request timed out");
      } else {
        // Handle other errors
        console.error(error);
     }
    }),  
    []); */


  /*  useEffect(() => {
      const source = axios.CancelToken.source(); // Create a cancel token source
    
      axios.get("https://restcountries.com/v2/all", { timeout: 5000, cancelToken: source.token })
        .then((res) => {
          setCountries(res.data);
        })
        .catch((error) => {
          if (axios.isCancel(error)) {
            // Handle timeout error
            console.log("Request timed out");
          } else {
            // Handle other errors
            console.error(error);
          }
        });
    
      // Cleanup function to cancel the request if the component unmounts
      return () => {
        source.cancel("Request canceled by cleanup"); // Cancel the request on unmount
      };
    }, []); // Empty dependency array means this effect runs once on component mount
    




  useEffect(() => {
    if (selectedCountry) {
      // Automatically fetch weather data when a country is selected
      fetchWeatherData(selectedCountry.capital);
    }
  }, [selectedCountry]);

  const handleCountrySelection = (country) => {
    // Use a setTimeout to avoid state updates during render
    setTimeout(() => {
      setSelectedCountry(country);
    });
  };

  const fetchWeatherData = (capital) => {
    // Fetch weather data for the selected country's capital
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`;
    axios.get(url).then((response) => {
      setWeatherData(response.data);
    });
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div>
      <div>
        Find countries <input value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
      </div>
      <ShowResults filterdCountries={filteredCountries} handleCountrySelection={handleCountrySelection} />
      {weatherData && <W data={weatherData} />}
    </div>
  );
};

function W({ data }) {
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main && <h1>{data.main.temp.toFixed()}°C</h1>} 
          </div>
          <div className="description">
            {data.weather && <p>{data.weather[0].main}</p>}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main && <p className='bold'>{data.main.feels_like.toFixed()}°C</p>}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main && <p className='bold'>{data.main.humidity}%</p>}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind && <p className='bold'>{data.wind.speed.toFixed()} MPH</p>}
              <p>Wind Speed</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const ShowResults = ({ filterdCountries, handleCountrySelection }) => {
  if (filterdCountries.length === 1) {
    const country = filterdCountries[0];
    handleCountrySelection(country); // Automatically select the country and fetch weather data
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
    );
  }
  if (filterdCountries.length > 10) return <div>Too many matches, specify another filter </div>;

  return filterdCountries.map((country) => {
    return (
      <div key={country.name}>
        {country.name} <button onClick={() => handleCountrySelection(country)}>show</button>
      </div>
    );
  });
}

export default App */