import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navigation.css';

function Navigation() {

  return (
      <nav>

        <NavLink to='/' className="Linktags">
        <h1 className='logobro'>Logo</h1>

        </NavLink>
        <div className="mislinks">
        <NavLink exact to='/' className="Linktags" activeClassName="selected">
          HOME
        </NavLink>

        <NavLink to='/clash' className="Linktags" activeClassName="selected">
          Clash Royale
        </NavLink>
        <NavLink to='/boca' className="Linktags" activeClassName="selected">
          Boca Juniors
        </NavLink>
        </div>
      </nav>
  );
}

export default Navigation;
