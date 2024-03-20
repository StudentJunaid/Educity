import React from 'react'
import './Contact.css'

import email_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_icon from '../../assets/white-arrow.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "128105e4-6e72-4a5c-bb27-3c98d02f7c90");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  


    return (
        <div className='Contact'>
            <div className="contact-col">
                <h3>send Us message <img className='email' src={email_icon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic eum minima amet accusamus, blanditiis necessitatibus praesentium minus cupiditate quod quibusdam est. Impedit nisi molestiae nulla!
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@Junaid</li>
                    <li><img src={phone_icon} alt="" />03837335509</li>
                    <li><img src={location_icon} alt="" />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, iste!</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>
                       Your Name
                    </label>
                    <input type="text" name="name" placeholder='write Your Name' required />
                    <label>
                        Phone Number
                    </label>
                    <input type="number" name="phone" placeholder='write Your Phone Num' required />
                    <label>
                        Write Your message here
                    </label>
                    <textarea placeholder='Write any messsge' rows="8"></textarea>
                    <button className='dark-btnn'>Submit Now <img  src={white_icon} /></button>
                </form>
                   <span className='msg'>{result}</span>
            </div>
        </div>
    )
}

export default Contact