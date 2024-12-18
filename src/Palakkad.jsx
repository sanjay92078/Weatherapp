import React from 'react'
import useFetch from './useFetch'


const Palakkad = () => {

    const details = useFetch("https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric")  


  return (
    <div>
          <div className='parent'>
           
      
    
      {/* input boxes */}
  
      {details && (
  
    
      <div className='input1'>
  
        <div>
        
          <h2 className='h1'> <i class="fa-solid fa-location-dot"></i> {details.name}</h2>
          <h2 className='h3'><i class="fa-solid fa-temperature-full"></i> Temperature:  <br /> {details.main.temp} </h2>
          <h2 className='h4'> <i class="fa-solid fa-face-smile"></i> Feels Like : <br /> {details.main.feels_like}</h2>
          <h2 className='h5'> <i class="fa-solid fa-wind"></i> Wind: <br /> {details.wind.speed}</h2>
  
        </div>
        <div className='sunrise'>
          <p>sunrise <br /> {details.sys.sunrise}</p>
        </div>
        <div className='sunset'>
          <p>sunset <br /> {details.sys.sunset}</p>
        </div>
  
      </div>
      )}
      </div>
    </div>
  )
}

export default Palakkad
