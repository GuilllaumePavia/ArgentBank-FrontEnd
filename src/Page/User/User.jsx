import React from 'react'
import Header from '../../Components/Header/Header'
import EspaceClient from '../../Components/EspaceClient/EspaceClient'
import Footer from '../../Components/Footer/Footer'
import './User.css'

export default function User() {
  return (
    <div>
      <Header/> 
      <div className='espaceclient-login'>
      <EspaceClient/>
      </div>
      <Footer/> 
    </div>
  )
}
