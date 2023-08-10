import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setField, setLoading} from '../../features/editingUserReducer';
import './LoginLogo.css';


export default function LoginLogo() {

  

  const dispatch = useDispatch();
  const {firstName, loading} = useSelector((state) => state.user); 


  const handleFirstNameChange = (e) => {
  dispatch(setField({ fieldName: 'firstName', fieldValue: e.target.value }));
  };
  
  // const handleLoadingChange = () => {
  // dispatch(setLoading(!loading));
  // };




  return (
    <div>
          <Link to="/Edit" className='login-logo-orga'><i className="fa fa-user-circle logo-login"></i>
          <div className='first'>{firstName}</div>
          </Link>
    </div>
  )
}
