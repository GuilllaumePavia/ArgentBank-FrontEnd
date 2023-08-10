import React from 'react'
import './Steps.css'
import tchat from '../../designs/img/icon-chat.png'
import billet from '../../designs/img/icon-money.png'
import blason from '../../designs/img/icon-security.png'

export default function Steps() {
  return (
    <div className='steps-orga'>
      <div className='orga-box-steps'>
            <div className='rond-vert'><img src={tchat} alt="Logo tchat" className='img-steps' /></div>
           <h2 className='h2-steps'>You are our #1 priority</h2> 
           <p className='p-steps'>Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes. </p>
      </div>
      <div className='orga-box-steps'>
           <div className='rond-vert'><img src={billet} alt="Logo billets" className='img-steps' /></div>
           <h2 className='h2-steps'>More savings means higher rates</h2> 
           <p className='p-steps'>The more you save with us, the higher your interest rate will be! </p>
      </div>
      <div className='orga-box-steps'>
          <div className='rond-vert'><img src={blason} alt="Logo blason" className='img-steps' /></div>
          <h2 className='titre-steps'>Security you can trust</h2> 
          <p className='p-steps'> We use top of the line encryption to make sure your data and money is always safe. </p>
      </div>
    </div>
  )
}
