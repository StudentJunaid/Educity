import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="Our program" desc="What we offer"/>
        <Programs />
        <About/>
        <Title title="Gellery" desc="Campus Photo"/>
        <Campus/>
        <Title title="testimonial" desc="What Student says"/>
        <Testimonial/>
        <Title title="Contact us" desc="Get in touch"/>
        <Contact/>
      </div>
    </div>
  )
}

export default App