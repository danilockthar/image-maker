import React, {useEffect, useState} from 'react';
import './css/lowNav.css';
import 'font-awesome/css/font-awesome.min.css';


function LowNav(props){
  let barra = document.getElementById('barra');
  let barrab = document.getElementById('barrab');
  let barrac = document.getElementById('barrac');
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
      hidden.style.width = '0px';
      barra.style.transform = 'rotate(180deg) translateY(-15px)';
      barra.style.transformOrigin = 'top';
      barrab.style.transform = 'translateX(0px)';
      barrab.style.opacity = '1';
      barrac.style.transform = 'rotate(180deg) translateY(15px)';
      barrac.style.transformOrigin = 'bottom';
    })
  }

  const toggleHideDiv = (e)=>{



    if(!toggle){
      console.log('true');
      setToggle(true);
      hidden.style.width = '100%';
      barra.style.transform = 'rotate(45deg) translateY(12px)';
      barra.style.transformOrigin = 'top';
      barrab.style.transform = 'translateX(-300px)';
      barrab.style.opacity = '0';
      barrac.style.transform = 'rotate(-45deg) translateY(-12px)';
      barrac.style.transformOrigin = 'bottom';
    }else{
      console.log('false');
      setToggle(false);
      hidden.style.width = '0px';
      barra.style.transform = 'rotate(180deg) translateY(-15px)';
      barra.style.transformOrigin = 'top';
      barrab.style.transform = 'translateX(0px)';
      barrab.style.opacity = '1';
      barrac.style.transform = 'rotate(180deg) translateY(15px)';
      barrac.style.transformOrigin = 'bottom';
    }



  }

  return(
    <div className='navLow'>
      <div className='lowNav'>
        <button className='showTemps' onClick={toggleHideDiv} > <section className='barradiv'><div id='barra'></div> <div id='barrab'></div> <div id='barrac'></div></section> <span id='span'></span>COLECCIÓN  </button>
        <a href='https://github.com/danilockthar' target='new_blank'><img src='img/githublogo.png' alt='Github Page' className='github' /></a>
      </div>
      <div className='hideDiv' id='hiddenDiv'>
      <div className='formContainer'>
        <form className='formaHidde'>

        <select value={categoria} onChange={onChangeCat}>
          <option value='todos'> todos </option>
          <option value='futbol'> Futbol </option>
          <option value='videojuegos'> Videojuegos </option>

        </select>
        <input type="text" placeholder="busqueda" />

        </form>
        </div>
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
