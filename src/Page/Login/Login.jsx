import React from 'react'
import Header from '../../Components/Header/Header'
import Formulaire from '../../Components/Formulaire/Formulaire'
import Footer from '../../Components/Footer/Footer'
import './Login.css'

export default function Login() {
  return (
    <div >
      <div className='Header-responsive'>
      <Header />
      </div>
      <div className='formulaire-orga'>
      <Formulaire/>
      </div>
      <Footer/>
    </div>
  )
}
