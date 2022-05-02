import React from 'react';
import './Skills.css';
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {SiJavascript} from 'react-icons/si';
import {RiReactjsLine} from 'react-icons/ri';
import {DiNodejs} from 'react-icons/di';
import {SiMongodb} from 'react-icons/si';

function Skills() {
  return(
    <div id='allofskillsfornavbar' className='allofskills'>
        <div  className='headerbigone'>Toolbox</div>

        <div>
            <div className='subheaders'>Front-end</div>
            <div className='sortboxes'>
                <div className='boxes'>
                    <AiFillHtml5/>
                </div>
                <div className='boxes'>
                    <IoLogoCss3 />
                </div>
                <div className='boxes'>
                    <SiJavascript />
                </div>
                <div className='boxes'>
                    <RiReactjsLine />
                </div>
            </div>
        </div>

        <div>
            <div className='subheaders'>Back-end</div>
            <div className='sortboxes'>
                <div className='boxes'>
                    <DiNodejs />
                </div>
            </div>
        </div>

        <div>
            <div className='subheaders'>Database</div>
            <div className='sortboxes'>
                <div className='boxes'>
                    <SiMongodb />
                </div>
            </div>
        </div>

    </div>
  );
}

export default Skills;