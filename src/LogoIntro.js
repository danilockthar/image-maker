import React,{useEffect, useState} from 'react';
import './css/LogoIntro.css';

function LogoIntro(props){

  const [clase, setClase] = useState('logointro');

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setClase('desaparecer');
    },1000);

  })

  return(
    <div className={clase}>
      <img src='img/amigurises2.png' className='logoamigo' />
      <img src='img/puff.svg' className='loaderpuff' />
      <div>
      <p className='invisible'> supercell </p>
      <p className='invisible1'> nemesis grant </p>
      <p className='invisible2'> walt disney </p>
      <p className='invisible3'> direccion </p>
      </div>
    </div>
  )
}

export default LogoIntro;
