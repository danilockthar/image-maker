import React, {useEffect, useState} from 'react';
import './css/lowNav.css';
import 'font-awesome/css/font-awesome.min.css';


function LowNav(props){

  const [toggle, setToggle] = useState(false);
  const [categoria, setCategoria] = useState('todos');


  const clashRoyale = {
    categoria : 'videojuegos',
    fullName : 'Clash Royale',
    imgUrl : 'clash-royale-template.jpg',
    value : 'clash-royale'
  }
  const bocaJuniors = {
    categoria : 'futbol',
    fullName : 'Boca Juniors',
    imgUrl : 'boca-template.jpg',
    value : 'boca-juniors'
  }

  let barra = document.getElementById('barra');
  let barrab = document.getElementById('barrab');
  let barrac = document.getElementById('barrac');
  const buttons = document.getElementsByClassName('botonProps');
  let hidden = document.getElementById('hiddenDiv');


  const fetchData = () =>{
    fetch("http://www.broeders.com.ar/includes/categorias.php", {
      method: 'POST',
      headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body: "categoria="+ categoria
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      }
    ).catch((error) => {
        console.error(error);
    })}

  const setNombre = (e)=>{
    let target = e.target.getAttribute('data-value');
  }
  const onChangeCat = (e)=>{
    setCategoria(e.target.value);
  }

  useEffect(()=>{
    fetchData();
  }, [])

  if(toggle){
    window.addEventListener('click', ()=>{

      console.log(' out');
    })
  }

  for(let boton of buttons){
    boton.addEventListener('click', ()=>{
      setToggle(false);
      hidden.style.height = '0px';
      barra.style.transform = 'rotate(0deg) translateX(0px)';
      barra.style.transformOrigin = 'top left';
      barrab.style.transform = 'translateX(0px)';
      barrab.style.opacity = '1';
      barrac.style.transform = 'rotate(0deg) translateX(0px)';
      barrac.style.transformOrigin = 'bottom left';

    })
  }

  const toggleHideDiv = (e)=>{



    if(!toggle){
      console.log('true');
      setToggle(true);
      hidden.style.height = '530px';
      barra.style.transform = 'rotate(40deg)';
      barra.style.transformOrigin = 'top left';
      barrab.style.transform = 'translateX(-300px)';
      barrab.style.opacity = '0';
      barrac.style.transform = 'rotate(-40deg) ';
      barrac.style.transformOrigin = 'bottom left';
    }else{
      console.log('false');
      setToggle(false);
      hidden.style.height = '0px';
      barra.style.transform = 'rotate(0deg) translateX(0px)';
      barra.style.transformOrigin = 'top left';
      barrab.style.transform = 'translateX(0px)';
      barrab.style.opacity = '1';
      barrac.style.transform = 'rotate(0deg) translateX(0px)';
      barrac.style.transformOrigin = 'bottom left';

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
