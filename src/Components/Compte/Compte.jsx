import React from 'react'
import Chevron from '../../designs/img/chevron.png'
import Crayon from '../../designs/img/crayon.jpg'
import './Compte.css'

export default function Compte() {
  return (
     <div className='Tableur'>
    <div className='Ligne-Index'>
        <div className='Ligne-Index-Partie1'>
            <p>Date</p>
            <p>Description</p>
        </div>
        <div className='Ligne-Index-Partie2'>
            <p>Amount</p>
            <p>Balance</p>
        </div>
        </div>

        <div className='Ligne'>
        <div className='Ligne-Tableau'>
            <div className='Ligne-Tableau1'>
            <p>27/02/20</p>
            <p>Golden Sun Bakery</p>
            </div>
            <div className='Ligne-Tableau2'> 
            <p>$8,00</p>
            <p>$298,00</p>
            <p>$298,00</p>
           
            </div>
        </div>
        </div>

      <div className='Ligne'>
        <div className='Ligne-Tableau'>
            <div className='Ligne-Tableau1'>
              <p>27/02/20</p>
              <p>Golden Sun Bakery</p>
            </div>
            <div className='Ligne-Tableau2'> 
              <p>$8,00</p>
              <p>$298,00</p>
              <div>
              <img src={Chevron} alt="Chevron" className="Chevron"/>
              </div>
            </div>
            </div>
            <div className='Ligne-Tableau-Option'>
                <div className='Option-colonne1'>
                <p>Transaction type</p>
                    <p>Category</p>
                    <p>Note</p>     
                </div>
                <div className='Option-colonne2'>
                    <p>Electronic</p>
                    <p>Food</p>
                    <p>lorem ipsum</p>
                    
                </div>
                <div className='Option-colonne3'>   
                <div className="Crayon">
                    <img src={Crayon} alt="crayon" className='crayon1'/>
                </div> 
                <div className="Crayon">
                    <img src={Crayon} alt="crayon" className='crayon2' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
