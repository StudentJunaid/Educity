import React from 'react'
import './About.css'
import   about_png from '../../assets/about.png'
import   play_icon from '../../assets/play-icon.png'

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <img className='about-img' src={about_png} alt="" />
            <img className='play-icon' src={play_icon} alt="" />
        </div>
        <div className="about-right">
            <p className='about-uni'>About University</p>
            <h1>Nurturing Tomorrow's Leaders Today</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo eos temporibus voluptates id. Quod aperiam culpa hic accusamus debitis, dolore consequuntur simillaborum aut quia blanditiis, beata</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo eos temporibus voluptates id. Quod aperiam culpa hic accusamus debitis, dolore consequuntur simitiis, beata</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eapturi laborum aut quia blanditiis, beata Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </div>
    </div>
  )
}

export default About