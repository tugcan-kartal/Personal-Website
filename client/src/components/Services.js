import React from 'react';
import './Services.css'
import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
import fourth from './images/fourth.png';

function Services() {
  return(
    <div id='allofservices' className='AllOfServices'>
    
        <div className='biggestheader'>
            Solutions I offer
        </div>

        <div className='allofcontent'>

            <div className='contentone'>
                <div className='firstimage'>
                    <img className='imagesafter' src={first} alt='not found'/>
                </div>
                <div className='contentofcontentone'>
                    <div className='firstparagraph'>
                        1. Website building
                    </div>
                    <div>
                        If you want a website for any reason, 
                        I can make a high performance, SEO optimized, 
                        Responsive and most importantly cost effective website for your exact 
                        needs such as promotion, e-commerce, landing or single page websites.
                    </div>
                </div>
                
            </div>

            <div className='contentone'>
                <div className='contentofcontentone'>
                    <div className='firstparagraph'>
                        2. Control your website's content easily
                    </div>
                    <div>
                        Enjoy control of your website with a powerful CMS like WordPress with an 
                        easy-to-use panel, or let's think about your problems together and develop 
                        solutions where solutions like WordPress are insufficient.
                    </div>
                </div>
                <div className='firstimage'>
                    <img className='imagesafter' src={second} alt='not found'/>
                </div>
            </div>

            <div className='contentone'>
                <div className='firstimage'>
                    <img className='imagesafter' src={third} alt='not found'/>
                </div>
                <div className='contentofcontentone'>
                    <div className='firstparagraph'>
                        3. E-commerce website
                    </div>
                    <div>
                        Your idea is priceless, now it's time to take it to the web and attract customers. 
                        Sell your products or services on mobile-friendly websites that look great and 
                        get paid from the most common platforms like paypal and stripe.
                    </div>
                </div>
                
            </div>

            <div className='contentone'>
                <div className='contentofcontentone'>
                    <div className='firstparagraph'>
                        4. Hosting and maintenance
                    </div>
                    <div>
                        Many companies or individuals do not want to worry about the services required to keep 
                        the website alive or the development and maintenance of the website. 
                        Leave these troublesome issues to us and let's host your website on iron-like servers 
                        such as aws, ensure its security and develop it immediately when you have an extra request.
                    </div>
                </div>
                <div className='firstimage'>
                    <img className='imagesafter' src={fourth} alt='not found'/>
                </div>
            </div>
        </div>
    </div>

  ) 
}

export default Services;
