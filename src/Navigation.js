import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import './css/Navigation.css';


function Navigation(props) {

  const [toggle, setToggle] = useState(false);

  const toggleHideDiv = ()=>{

    let hidden = document.getElementById('hiddenDiv');
    if(!toggle){
      console.log('true');
      setToggle(true);
      hidden.style.height = '500px';
    }else{
      console.log('false');
      setToggle(false);
      hidden.style.height = '0px';
    }
  }

  return (
    <div className='navigation'>
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

      </div>
  );
}

export default Navigation;
