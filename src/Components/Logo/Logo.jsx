import React from 'react'
import Logo from '../../designs/img/argentBankLogo.png'
import './Logo.css';
import { Link } from 'react-router-dom';

function LogoContainer() {
  return (
    <div className='logo-logo'>
    <Link to="/">
      <img src={Logo} alt="Logo Argent Bank" />
    </Link>
    </div>
  )
}

export default LogoContainer 
