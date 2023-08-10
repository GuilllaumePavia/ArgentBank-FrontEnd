import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import {setReset} from '../../features/userReducer';
import './SingLogo.css';
import { Link } from 'react-router-dom';

export default function SingLogo() {

  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch(); 

  const signOut = () => {
		dispatch(setReset());
	};



  return (
    <div className='sign'>
      { !token ?

       <Link to="/Login" >
          Sign In
        </Link>

        :

        <Link className="main-nav-item sign-out" onClick={signOut} >
          <div className='logo-sign'>
          <i className="fa fa-sign-out"></i>
          </div>
          Sign Out
        </Link>
        }
    </div>
  )
}
