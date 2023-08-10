import React, { useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Components/Header/Header'
import {useNavigate} from 'react-router-dom';
import EspaceClient from '../../Components/EspaceClient/EspaceClient'
import Editinput from '../../Components/Edit-input/Edit-input'
import Footer from '../../Components/Footer/Footer'
import './Edit.css'
import { getMe } from '../../features/userReducer';


export default function Edit() {

  const dispatch = useDispatch()
  const token = useSelector(state => state.user.token)
  const navigate= useNavigate()
  
  useEffect(() => {
   token ?
   dispatch(getMe())
   : navigate("/Login")
  }, [token]) 

  return (
    <>
    <Header/>
    <div className='Editinput-orga'>
    <Editinput/>
    </div>
    <div>
    <EspaceClient/>
    </div>
    <Footer/>
    </>

  )
}
