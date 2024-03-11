import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
function Hero() {
    return (

        <div className='hero container'>
              <div className="hero-text">
                <h1>We Ensure better education for a batter world</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illum laborum neque error voluptatibus repellendus hic laboriosam minima molestias veniam!</p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="dark-arrow" /></button>
              </div>
        </div>

    )
}

export default Hero