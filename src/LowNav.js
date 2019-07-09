import React, {useEffect, useState} from 'react';
import './css/lowNav.css';

function LowNav(props){
  const buttons = document.getElementsByClassName('botonProps');
  let hidden = document.getElementById('hiddenDiv');

  const [toggle, setToggle] = useState(false);
  const [categoria, setCategoria] = useState('todos');


  const setNombre = (e)=>{
    let target = e.target.getAttribute('data-value');
  }
  const onChangeCat = (e)=>{
    setCategoria(e.target.value);
  }

  if(toggle){
    window.addEventListener('click', ()=>{

      console.log(' out');
    })
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
        <button className='showTemps' onClick={toggleHideDiv} > COLECCIÓN </button>
      </div>
      <div className='hideDiv' id='hiddenDiv'>
        <form>
        <select value={categoria} onChange={onChangeCat}>
          <option value='todos'> todos </option>
          <option value='futbol'> Futbol </option>
          <option value='videojuegos'> Videojuegos </option>

        </select>
        <input type="text" placeholder="busqueda" />
        </form>
        <div className='container'>
        <section className='sectionCards'>
        <img src='img/boca-template.jpg' onClick={props.setNombre} className='botonProps' id='bocaButton' data-value='boca-juniors'/>

        </section>
        <section className='sectionCards'>
        <img src='img/clash-royale-template.jpg' onClick={props.setNombre} className='botonProps' id='clashButton' data-value='clash-royale'/>

        </section>
        <section className='sectionCards'>
        <img src='img/clash-royale-template.jpg' onClick={props.setNombre} className='botonProps' id='clashButton' data-value='clash-royale'/>
        </section>
        <section className='sectionCards'>
        <img src='img/clash-royale-template.jpg' onClick={props.setNombre} className='botonProps' id='clashButton' data-value='clash-royale'/>
        </section>
        <section className='sectionCards'>
        <img src='img/clash-royale-template.jpg' onClick={props.setNombre} className='botonProps' id='clashButton' data-value='clash-royale'/>
        </section>
        </div>
      </div>
    </div>
  )
}

export default LowNav;
