import React from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import drizzle_icon from '../Assets/drizzle.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';


const WeatherApp = () =>{
    let api_key = "b68f1c6230584df4d4b40115cb638181";
    return(
        <div className='container'>
            <div className='top-bar'>
                <input type="text" className="cityInput" placeholder='Search'/>
                <div className='search-icon'>
                   <img src={search_icon} alt=''/>
                </div>
            </div>
          <div className='weather-image'>
             <img src={cloud_icon} alt="" />
          </div>
          <div className="weather-temp">24°c</div>
          <div className="weather-location">London</div>
          <div className="data-container">
            <div className="element">
                <img src={humidity_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percentage">64%</div>
                    <div className="text">Humidity</div>
                </div>
            </div>

            <div className="element">
                <img src={wind_icon} alt="" className='icon'/>
                <div className="data">
                    <div className="humidity-percentage">18 mph</div>
                    <div className="text">Wind Speed</div>
                </div>
            </div>
          </div>
        </div>
    );
};
export default WeatherApp
