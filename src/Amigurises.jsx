import React from 'react';
import './css/AmigurisesC.css';
import { NavLink } from 'react-router-dom';

function Amigurises(){
  return(
    <div className='divAmigu'>

      <h1 className='crea'>
        creá tu tarjeta de cumpleaños
      </h1>
      <h1 className='creados'>
        totalmente gratis!
      </h1>
      <NavLink to='/app' className='navexplora'>
        <p className='pexplora'>explorá!</p>
      </NavLink>
      <section className='footerAmigur'>
        <p className='textFooter'> Amigurises 2019 - creado por Broeders</p>
      </section>

    </div>
  )
}

export default Amigurises;
