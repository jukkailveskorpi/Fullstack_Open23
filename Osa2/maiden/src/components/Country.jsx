import React from 'react'

const Country = ({ country, data }) => {
  return (
    <div>
      <h1><span>{country.name}</span></h1>
      <p>capital {country.capital}<br />population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(language =>
          <li key={language.name}>{language.name}<br /></li>
        )}
      </ul>
      <p>
      <img
        src={country.flag}
        alt={`Flag of ${country.name}`} 
        height="60" 
        width="60" 
      /></p>

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


     {/* 
      <h2>Weather in {country.capital}</h2>
      <p><b>temperature: </b> {weather['current'].temperature} Celcius</p>
      <img src={weather['current'].weather_icons[0]} alt='weather icon' />
        <p><b>wind: </b> {weather['current'].wind_speed} kph direction {weather['current'].wind_dir}</p>*/}
    </div>
  )
}

export default Country