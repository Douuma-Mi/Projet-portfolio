import React from 'react'
import "../styles/Cards.css"
import capture from "../assets/860_ny.jpg"
import capture2 from "../assets/Capture d'écran 2025-03-20 090026.png"
import capture3 from "../assets/Capture d'écran 2025-03-21 203411.png"

function Cards() {
  return (
    <div className='cardeeeeeeeee'>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
  <div className="card">
    <img src={capture}alt="weather" style={{width: '100%'}} />
    <h1>Weather</h1>
    <p className="title">The Meteorology Project is a capital-based artificial intelligence system designed to provide accurate weather information using the latest data analysis and forecasting technologies. The project relies on multiple sources, such as satellites, weather stations, and artificial intelligence, to analyze the coming April forecasts for users.</p>
    <a href="https://weather-three-sage.vercel.app/" >Lien projet Weather</a>

  </div>
  <div className="card">
    <img src={capture2}alt="Matching card" style={{width: '100%'}} />
    <h1>Matching card</h1>
    <p className="title">Card pairing is a card game for managers, non-critical people, and families. (Card pairing) is a type of card game, but the main thing is to find matching cards or cards that meet a certain association standard. These linear games are called memory, speed, or logic and are very popular with children and families..</p>
    <a href="https://matching-cardd.vercel.app/" >Lien projet Matching card</a>

  </div>
  <div className="card">
    <img src={capture3}alt="Google maps" style={{width: '100%'}} />
    <h1>Google maps</h1>
    <p className="title">A map application is a software program designed to display interactive maps and provide various features such as navigation, localization, and language exploration. These applications are used on smartphones, tablets, and computers to track and calculate trips, explore places, and obtain real-time information..</p>
    <a href="https://googlemaps-orcin.vercel.app/" >Lien Google maps</a>

  </div>
</div>

  )
}

export default Cards