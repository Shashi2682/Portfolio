import React from 'react'
import './Skills.css';
import webd from '../../assets/ux.png';
import leet from '../../assets/coding.png';
const Skills = () => {
  return (
    <section id='skills'>
       <span className='skillTitle'>What I do</span>
       <span className='skillDesc'>I am skilled and passionate web designer with experience in creating visually appealing and User-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS and JavaScript asa well as Data Structures and Algorithm</span>
       <div className='skillBars'>
           <div className='skillBar'>
             <img src={webd} className='skillBarImg'/>
             <div className='skillBarText'>
              <h2>Website Design</h2>
              <p>Experience in developing User-Friendly Websites</p>
              <a href='https://github.com/Shashi2682'>View Github Profile</a>
             </div>
           </div>
           <div className='skillBar'>
             <img src={leet} className='skillBarImg'/>
             <div className='skillBarText'>
              <h2>LeetCode</h2>
              <p>Has Solved 100+ questions on leetcode</p>
              <a href='https://leetcode.com/u/Shashi2682/'>View LeetCode Profile</a>
             </div>
           </div>
           
       </div>
    </section>
  )
}

export default Skills
