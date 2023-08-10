import React from 'react'
import './Box.css'
import { Link } from 'react-router-dom';

export default function Box(props) {
  return (
    <div className="box-orga" style={{backgroundColor:props.bg}}>
        <div className="box-width">
          <h3 className="box-title" style={{color:props.couleur}}>Argent Bank Checking (x8349)</h3>
          <p className="montant" style={{color:props.couleur}}>$2,082.79</p>
          <p className="box-description" style={{color:props.couleur}}>Available Balance</p>
        </div>
        <div>
          <Link to="/Transaction">
          <button  className="transaction-bouton">View transactions</button>
          </Link>
        </div>
      
    </div>
  )
}
