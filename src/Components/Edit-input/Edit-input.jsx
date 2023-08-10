import React, { useEffect, useState } from 'react'
import './Edit-input.css'
import { useDispatch, useSelector } from 'react-redux';
import {setField, setState, setLoading} from '../../features/editingUserReducer';
import { useNavigate } from 'react-router-dom';
import {edit} from "../../features/userReducer";

export default function Editinput() {

  
  //Importer le state editLogicState dans Edit-input
  const dispatch = useDispatch()
  const editingUser = useSelector((state) => state.editingUser) // Contient tous les states
  const user = useSelector((state) => state.user)





  const navigate = useNavigate()

  // Qu'est-ce qu'on change en activant l'input
  const onFieldChange = (e, fieldName) => {
    dispatch(setField({fieldName : fieldName, fieldValue:e.target.value}))
 
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   dispatch(setLoading(true))
   dispatch(edit(editingUser))
  }

  useEffect(() => {
   dispatch(setState(user))
  }, [])

  return (
 
    <form className='composant-edit-form' onSubmit={handleSubmit}>
     <p className='edit-titre'>Edit user info</p>

     <div className='edit-input-form'>

      <div className='input-form'>
      <label htmlFor="">User name:</label>
      <input type="text" id="userName" name="userName" value={editingUser?.userName} onChange={e => onFieldChange(e,"userName")} /> 
     </div>

     <div className='input-form'>
      <label htmlFor="">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={editingUser?.firstName}/>
     </div>

     <div className='input-form'>
      <label htmlFor="">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={editingUser?.lastName}/>
    </div>

    

    <div className='button-form'>
    <button type="submit">Save</button>
    <button>Cancel</button>
    </div>
    </div>

   </form>
  )
}
