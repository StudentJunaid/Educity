import React, { useRef } from 'react'
import './Testimonial.css'
import next_btn from '../../assets/next-icon.png'
import back_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonial() {

    const slideImg = useRef();
    let tx = 0;
    
    const Forword = () => {
      if (tx > -50) {
        tx -= 25;
      }
    
      slideImg.current.style.transform = `translateX(${tx}%)`;

      if(tx === -50){
        tx = 25
      }
    };
    
    const Backword = () => {
      if (tx < 0) {
        tx += 25;
      }
    
      slideImg.current.style.transform = `translateX(${tx}%)`;
    };
    
    return (
        <div className='testimonial'>
            <img className='next-btn' src={next_btn} alt="" onClick={Forword} />
            <img className='back-btn' src={back_btn} alt="" onClick={Backword} />
            <div className="slider">
                <ul ref={slideImg}>
                    <li>
                        <div className="slide">
                            <div className='slede-div'>
                                <img src={user_1} alt="" />
                                <div className='inner-div'>
                                    <h3>Williom Jackson 1</h3>
                                    <p>Educiti,USA</p>
                                </div>
                            </div>
                            <p>Loremaepe et accusantium molestiae libero reprehenderit, aliquid similique laborum fuga voluptates blanditiis illo.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className='slede-div'>
                                <img src={user_3} alt="" />
                                <div className='inner-div'>
                                    <h3>Williom Jackson 2</h3>
                                    <p>Educiti,USA</p>
                                </div>
                            </div>
                            <p>Loremaepe et accusantium molestiae libero reprehenderit, aliquid similique laborum fuga voluptates blanditiis illo.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='slede-div'>
                                <img src={user_1} alt="" />
                                <div className='inner-div'>
                                    <h3>Williom Jackson 3</h3>
                                    <p>Educiti,USA</p>
                                </div>
                            </div>
                            <p>Loremaepe et accusantium molestiae libero reprehenderit, aliquid similique laborum fuga voluptates blanditiis illo.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className='slede-div'>
                                <img src={user_4} alt="" />
                                <div className='inner-div'>
                                    <h3>Williom Jackson 4</h3>
                                    <p>Educiti,USA</p>
                                </div>
                            </div>
                            <p>Loremaepe et accusantium molestiae libero reprehenderit, aliquid similique laborum fuga voluptates blanditiis illo.</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Testimonial