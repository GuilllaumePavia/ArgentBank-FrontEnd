import React from 'react'
import PhotoBanniere from '../../designs/img/bank-tree.jpeg'
import TexteBanniere from '../TexteBanniere/TexteBanniere'
import './Banniere.css'

export default function Banniere() {
  return (
    <div>
    <div className='banniere-orga'>
      <img src={PhotoBanniere} alt="Pot de fleur avec des pièces dedans" className='banniere-img'  />
      </div>
      <TexteBanniere/>
      </div>
    
  )
}
