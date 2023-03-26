import React from 'react'
import { Link } from 'react-router-dom'
import "../style/Carousel.css"

function Carousel({ categorie }) {
  return (
    <div>
        <div class="container">
  <div class="carousel">
    <div class="carousel__face"><Link to={`/Categories/`}><span>This is something</span></Link></div>
    <div class="carousel__face"><span>Very special</span></div>
    <div class="carousel__face"><span>Special is the key</span></div>
    <div class="carousel__face"><span>For you</span></div>
    <div class="carousel__face"><span>Just give it</span></div>
    <div class="carousel__face"><span>A try</span></div>
    <div class="carousel__face"><span>And see</span></div>
    <div class="carousel__face"><span>How IT Works</span></div>
    <div class="carousel__face"><span>Woow</span></div>
  </div>
</div>
    </div>
  )
}

export default Carousel