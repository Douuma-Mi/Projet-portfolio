import React from 'react'
import "../styles/Cards.css"
import capture from "../assets/Capture d'écran 2025-03-19 215055.png"
import capture2 from "../assets/Capture d'écran 2025-03-20 090026.png"
import capture3 from "../assets/Capture d'écran 2025-03-21 203411.png"

function Cards() {
  return (
    <div>
      <div className='cardeees'>
        <div className="card">
          <a href='https://github.com/Douuma-Mi/Today-s-weather'>
            <img src={capture} alt="Avatar" />
            <div className="container">
              <h4><b>Today-s-weather</b></h4>
            </div>
          </a>
        </div>
        <div className="card">
          <a href='https://github.com/Douuma-Mi/Google-Maps'>
            <img src={capture3} alt="Avatar" />
            <div className="container">
              <h4><b>Google maps</b></h4>
            </div>
          </a>
        </div>

        <div className="card">
          <a href='https://github.com/Douuma-Mi/matching-card'>
            <img src={capture2} alt="Avatar" />
            <div className="container">
              <h4><b>Matching-card</b></h4>
            </div>
          </a>

        </div>

      </div>


    </div>

  )
}

export default Cards