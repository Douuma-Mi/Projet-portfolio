import React from 'react'
import "../styles/Img.css"
import img from '../assets/473789055_2059136214594434_1897053136128978071_n.jpg'
import "../styles/Skills.css"
function Image() {
  return (
    <div>
     <img className='hello' src={img} alt="Douuma" />
        </div>
  )
}

export default Image