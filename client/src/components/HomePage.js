import React from 'react';
import './HomePage.css';
import fifth from './images/fifth.png';

function HomePage() {
  return(
      <div id='allofhomepage' className='AllOfHomePage'>
          <div className='FirstParagraph'>Freelance Web Developer</div>
          <div className='SecondParagraph'>I help people take their business to the web with budget friendly and professional software.</div>
          <div className='İmageFromHomePage'>
              <img className='Image' src={fifth} alt='not found' />
          </div>
      </div>
  )
}

export default HomePage;
