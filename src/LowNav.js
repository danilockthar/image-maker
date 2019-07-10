import React, {useEffect, useState} from 'react';
import './css/lowNav.css';
import 'font-awesome/css/font-awesome.min.css';


function LowNav(props){

  const [toggle, setToggle] = useState(false);
  const [categoria, setCategoria] = useState('todos');
  const [myInfo, setMyInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  let templates, cantidad;
  let barra = document.getElementById('barra');
  let barrab = document.getElementById('barrab');
  let barrac = document.getElementById('barrac');
  const buttons = document.getElementsByClassName('botonProps');
  let hidden = document.getElementById('hiddenDiv');


  const fetchData = () =>{
    setIsLoading(true);
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
        setMyInfo(json);
        setIsLoading(false);
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
  }, [categoria])

  if(myInfo.length > 0){
    cantidad = myInfo.length;
    console.log(cantidad);
  templates = myInfo.map((info) =>
    <img src={`img/${info.imgUrl}`} onClick={props.setNombre} className='botonProps' id='bocaButton' data-value={`${info.imgTagName}`}/>

  );
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
        <div className='select'>
        <select value={categoria} onChange={onChangeCat} className='selectInput'>
          <option value='todos'> Todos </option>
          <option value='futbol'> Futbol </option>
          <option value='videojuegos'> Videojuegos </option>
        </select>
        </div>
        </form>
        <p className='totalSearch'> Encontrados ({cantidad}) </p>
        </div>
        <div className='container'>
          {isLoading ? <img src='img/puff.svg' className='loadimg' /> : templates }


        </div>
      </div>
    </div>
  )
}

export default LowNav;
