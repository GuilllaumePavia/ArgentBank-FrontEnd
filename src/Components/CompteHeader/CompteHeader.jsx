import React from 'react'
import './CompteHeader.css'
import Rouage from '../../designs/img/rouage.jpg' 
import ARBA from '../../designs/img/arba.jpg' 

export default function CompteHeader() {
  return (
  <div className='HeaderCompte'>
         <div className='LogoHeaderCompte'>
             <img src={ARBA} alt="Argent" className='LogoArgentBank' />
         </div>
        <div className='OptionsHeaderCompte'>
            <div>usename</div>
            <div>
            <i className="fa fa-user-circle sign-in-icon i-color"></i>
            </div>
            <div>
            <img src={Rouage} alt="rouage" className='rouage' />
            </div>
            <div>
            <img src="" alt="start" />
            </div>
        </div>
  </div>
  )
}
