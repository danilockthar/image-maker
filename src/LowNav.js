import React, {useEffect, useState} from 'react';
import './css/lowNav.css';

function LowNav(props){
  const buttons = document.getElementsByClassName('botonProps');
  let hidden = document.getElementById('hiddenDiv');
  const [toggle, setToggle] = useState(false);

  const setNombre = (e)=>{
    let target = e.target.getAttribute('data-value');


  }
  

  for(let boton of buttons){
    boton.addEventListener('click', ()=>{
      setToggle(false);
      hidden.style.height = '0px';
    })
  }

  const toggleHideDiv = (e)=>{


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

  return(
    <div className='navLow'>
      <div className='lowNav'>
        <button className='showTemps' onClick={toggleHideDiv} > Show Cards </button>
      </div>
      <div className='hideDiv' id='hiddenDiv'>
        <button onClick={props.setNombre} className='botonProps' id='buttonID' data-value='boca-juniors' > Boca </button>
        <button onClick={props.setNombre} className='botonProps' id='buttonID' data-value='clash-royale'> Clash </button>
      </div>
    </div>
  )
}

export default LowNav;
