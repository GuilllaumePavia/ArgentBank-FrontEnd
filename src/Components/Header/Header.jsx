import React from 'react'
// Commentaire
import './Header.css'
import LogoContainer from '../Logo/Logo'
import SingLogo from '../SingLogo/SingLogo'
import LoginLogo from '../LoginLogo/LoginLogo'

export default function Header() {
  return (
    <div className='header-orga'>
      <div className='logocontainer-responsive'>
      <LogoContainer/>
      </div>
      <div className='logos-orga'>
      <LoginLogo/>
      <SingLogo/>
      </div>
    </div>
  )
}












