import React, { useEffect, useState } from 'react';
import Icons from './components/Icons';
//import rain from './assets/rain.mp4';

const WeatherApp =()=> {
const [search, setSearch] = useState('')
const [values, setValues] = useState('')
const [icon, setIcon] = useState('')

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ead038bbc72fbd1287422f587030fee1&units=metric`

  const getData = async () => {
    await fetch(URL)
      .then(response => response.json())
     // .then(response => {return response.json()})
      .then( data => {
        if(data.cod >= 400) {
          setValues(null)// Set values to null
          setIcon(null); // Clear the icon when there's no data
        }else{         
          setIcon(data.weather[0].main)
          setValues(data)
        }        
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSearch = (e) => {
    if(e.key === 'Enter'){      
      setSearch(e.target.value)
    }
  }
  useEffect(() => {
    if (search !== '') {
    getData()
    }
  },[search]) 
    
      return (
          <div className="app">
    
            <div className="search">
            <input 
              onKeyDown={handleSearch}
              type="text"          
              autoFocus
            />
            </div>

            <div className="container">
              <div className="top">
              <div className="location">
              <p>{values ? values.name : ''}</p>
              </div>
              <div className="temp">
                {values ? <h1>{values.main.temp.toFixed()} °C</h1> : null}
              </div>
              <div className="descripton">
                <p>{values ? values.weather[0].main : ''}</p>
              </div>
               
              <div className="icon_c"> 
                {icon && (
              <img className='icon' src={Icons(icon)} alt="icon-weather" />
                )}
              </div>
              </div>
          
                  {values && (
                  <div className="bottom">
                    <div className="feels">
                        {values.main ? <p className='bold'>{values.main.feels_like.toFixed()}°C</p> : null}
                          <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                       <p className='bold'>{values.main.humidity}%</p> 
                      <p>Humidity</p>
                    </div>
                    <div className="wind">
                    {values.wind ? <p className='bold'>{values.wind.speed.toFixed()} MPH</p> : null}
                          <p>Wind Speed</p>
                    </div>
                  </div>
                  )}
              </div>
              </div>
              );
            }

export default WeatherApp;