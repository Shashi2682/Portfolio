import React from 'react'
import './Intro.css';
import bg from '../../assets/myimage.png';
const Intro = () => {
  return (
   <section id='intro'>
    
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introtext'>I'm<span className='introName'>Shashikant</span><br/>Website Designer</span>
        <p className='introPara'>An upbeat, self motivated team player with excellent </p>
        <p className='introPara'><p className='introPara'>Communication Skills. An innovative and creative individual looking for projects to gain practical knowledge.  </p> </p>

    </div>
    <button className='resume'><a href='https://drive.google.com/file/d/17CaB0wQ_kda2CxycE7iKydfYCfKjL2oC/view?usp=drive_link' className='aa' >Resume</a></button>
    <img src={bg} alt="profile" className='bg'/>
   </section>
  )
}

export default Intro
