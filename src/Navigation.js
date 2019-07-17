import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navigation.css';

function Navigation(props) {
  return (
    <div className='navigation'>
      <nav>
        <NavLink to='/' className="Linktags">
        <img src='img/amigurises2.png' className='logoimg' />
        </NavLink>
        <div className="mislinks">
        <NavLink exact to='/' className="Linktags" activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to='/app' className="Linktags" activeClassName="selected">
          APP
        </NavLink>
        </div>
      </nav>
      </div>
  );
}

export default Navigation;
