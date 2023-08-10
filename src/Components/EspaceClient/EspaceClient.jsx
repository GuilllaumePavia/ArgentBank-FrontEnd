import React from 'react'
import Box from '../Box/Box.jsx'
import './EspaceClient.css';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function EspaceClient() {

  const location = useLocation();
  const isUserPage = location.pathname === '/User';
  const {firstName, lastName, loading} = useSelector((state) => state.user); 

  return (
    <div>

    { !isUserPage ?
      
      <div className='orga-box-user'>
      <Box bg="rgb(46, 46, 46)" couleur="white"/>
      <Box bg="rgb(46, 46, 46)" couleur="white"/>
      <Box bg="rgb(46, 46, 46)" couleur="white"/>
      </div>

      :

      <div className='orga-box-edit'>
      <p className='welcome'>Welcome back {firstName} {lastName}!</p>
      <button className='Edit-Name-Style'>Edit Name</button>

      <Box bg="white" couleur="black"/>
      <Box bg="white" couleur="black"/>
      <Box bg="white" couleur="black"/>
      </div>

    }

    </div>
  )
}
