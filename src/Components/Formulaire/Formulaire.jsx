import React, { useEffect } from 'react'
import './Formulaire.css';
import { useDispatch, useSelector } from 'react-redux';
import { setField, setLoading, toggleCheckbox, login } from '../../features/userReducer';
import { useState } from "react" ;
import { useNavigate } from 'react-router-dom';
// import { connectUser } from '../../features/userLogic'


export default function Formulaire() {

  const [userName, setUserName] = useState(null)
  const [error, setError] = useState(null)
  const [password, setPassword] = useState(null)

  const dispatch = useDispatch()
  const userReducerState = useSelector((state) => state.user) // Contient tous les states
  // const onFieldChange = (e) => {
  //   const fieldName = e.target.name
  //   fieldName === 'checkbox'
  // ? dispatch(toggleCheckbox())
  //  : dispatch(setField({fieldName, fieldValue:e.target.value}))
  // }

  const navigate = useNavigate()
  //Redirection
  useEffect(() => { 
    userReducerState.token &&
    navigate("/User")
  }, [userReducerState.token]) 

  const handleSubmit = (e) => {
    e.preventDefault()
    // Les infos
    const data = { 
      email: userName,
      password: password
    }
   
    // data = { email: "euij", password: "uijd" }
    // faire la requete fetch pour envoyer les données au serveur
   dispatch(setLoading(true))
   dispatch(login(data))
  }
  
  return (
    <div className='form-orga-composant'>
      <div className='form-logo-orga'>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1 className='form-titre'>Sign In</h1>
        </div>
      <form onSubmit={handleSubmit}>
        <div className='form-input-orga'>
          {error && <p className="error"> {error} </p>}
        <label className='form-label' htmlFor="username">Username</label>
        <input type="text" id="username" name="username" onChange={e => setUserName(e.target.value)} />
        </div> 
        <div className='form-input-orga'>
        <label className='form-label' htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className="form-input-checkbox">
            <input type="checkbox" id="checkbox" name="checkbox"/>
            <label htmlFor="checkbox">Remember me</label>
        </div>
        <button className='form-button' type="submit" disabled={userReducerState.loading}>
          {
            userReducerState.loading &&
            <i className='fa fa-spin fa-spinner'></i>
          }
          Sing in
          </button>
      </form>
    </div>
  )
}

