import React from 'react';
import './Portfolio.css';
import tran from '../../assets/traning.png'
const Portfolio = () => {
  return (
    <section id='works'>
    <h1 className='heading'>My Portfolio</h1>
    <div className='traning'>
     <h1 className='head1'>Summer Training</h1>
     <img src={tran} />
     <div>
     <a href='jhyf'  className='head2'>View Traning Details</a>
     </div>
    </div>
    </section>
  )
}

export default Portfolio
