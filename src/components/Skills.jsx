import React from 'react'
import { Carousel } from 'react-bootstrap'
import Css from './Css'
import Reac from './Reac'
import Javascrip from './Javascrip'
import Htm from './Htm'

function Skills() {
  return (
    <Carousel>
    <Carousel.Item interval={1500}>
      <Htm/>
    </Carousel.Item>
    <Carousel.Item interval={1000}>
      <Reac/>
    </Carousel.Item>
    <Carousel.Item interval={500}>
      <Css/>
    </Carousel.Item>
    <Carousel.Item>
      <Javascrip/>
    </Carousel.Item>
  </Carousel>
  )
}

export default Skills