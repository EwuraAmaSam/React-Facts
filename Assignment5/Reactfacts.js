import React from 'react';
import './Reactfacts.css';

function Reactfacts() {
    return (
        <div className = "main">
            
        <div className='container'>

        <div className='top'>
            <div className='left'>
                <div className='image'></div>
                <h3>ReactFacts</h3>
            </div>

            <div className='right'>
                <h4>React Course - Project 1</h4>
                </div> 
        </div>

        <div className='bottom'>

            <h1>Fun facts about React</h1>
         <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by John Walke</li>
            <li>Has over 100K stars on GitHub</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including <br/> mobile apps</li>
         </ul>
        </div>

        </div>

        </div>
    );
}

export default Reactfacts;