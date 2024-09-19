// import logo from './logo.svg';
import React from 'react';
import Image from './personn.jpeg';
import Msg from './msgg.jpeg';
import lock from './lockk.jpeg';
import key from './keyy.jpeg';
import bgimg from './background.jpg';
import './SampleForm.css';



function SampleForm() {

  return (
    <div className='main'>
      <div className='Demo1'>
        <div className="signup">
          <b><h1><span>SignUp</span></h1></b>

          <form >
            <div className='person'>
              <img src={Image} alt="personn" className='image' ></img>
              <input type="text" placeholder=' Your Name' className='text'></input>
            </div>

            <div className='mail'>
              <img src={Msg} alt="mail" className='image'></img>
              <input type="text" placeholder=' Your Email' className='text'></input>
            </div>

            <div className='pass'>
              <img src={lock} alt="pass" className='image'></img>
              <input type="text" placeholder='  Your Password' className='text'></input>
            </div>


            <div className='key'>
              <img src={key} alt="key" className='image'></img>
              <input type="text" placeholder='  Repeat Your Password' className='text'></input>
            </div>
            <div className='terms'>
              <input type="checkbox" id="terms" />
              <label for="terms"> I agree all statements in <span>Terms of Service</span></label>

            </div>
            <div className='button'>
              <button type="submit">REGISTER
              </button>
            </div>



          </form>
        </div>
        <div className="sub1">
          <img src={bgimg} className='image2' />
        </div>
       </div>
    </div>

  )
}

export default SampleForm;



