import React, {useState, useEffect } from 'react';
import './css/Clash.css';
import CanvasLoader from './CanvasLoader';



function Clash(){

  let canvasEdad, canvasFecha, canvasHorario, canvasLugar,canvasinfoplus, canvasCumple;

  const [alwaysTrue, setAlwaysTrue] = useState(true);
  const [miEdad, setMiEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [lugar, setLugar] = useState("");
  const [infoplus, setInfoplus] = useState("");
  const [cumpleañero, setCumpleañero] = useState("");
  const [imgData, setImgData] = useState("");
  const [msgError, setMsgError] = useState("");
  const [mensajeh3, setMensajeh3] = useState(false);
  const [imgFetched, setImgFetched] = useState("");
  const [nameTemplate, setNameTemplate] = useState("");


  const traedata = () => {
      fetch("http://www.broeders.com.ar/includes/templates.php", {
        method: 'POST',
        headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: "imgUrl="+ nameTemplate
  })
    .then((response) => response.json())
    .then((json) => {
      const data = json;
      setImgFetched(data[0].imgUrl);
      console.log(imgFetched);
    }
  )
    .catch((error) => {
      console.error(error);
  })
  };

  const handleTemplate = (e)=>{
    setNameTemplate(e.target.value);
  }

    useEffect(traedata, [nameTemplate]);

    useEffect(()=>{
      makeCanvas();
    },[]);

  const handleSubmit = () =>{

     canvasEdad = miEdad;
     canvasFecha = fecha;
     canvasHorario = horario;
     canvasLugar = lugar;
     canvasinfoplus = infoplus;
     canvasCumple = cumpleañero;
     makeCanvas();
  }

  const showEdad = (e) => {
    setMiEdad(e.target.value)
  }
  const showFecha = (e) => {
    setFecha(e.target.value);
  }
  const showHorario = (e) => {
    setHorario(e.target.value);
  }
  const showLugar = (e) => {
    setLugar(e.target.value);
  }
  const showCumple = (e) => {
    setCumpleañero(e.target.value);
  }
  const showMasInfo = (e) => {
    setInfoplus(e.target.value);
  }


  const makeCanvas = ()=>{

    let imagen = document.getElementById('templateimg');
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext("2d");

    canvas.width = imagen.width;
    canvas.height = imagen.height;

    ctx.clearRect(10, 0, canvas.width, canvas.height);
    ctx.drawImage(imagen, 0, 0);

    ctx.textAlign = "center";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    if(canvasEdad){

      ctx.font = '40px Supercell-Magic';
      ctx.fillStyle = "#f4ae05";
      ctx.fillText(miEdad, 460, 145, canvas.width - 50);
      ctx.strokeText(miEdad, 460, 145, canvas.width - 50);
    }
    if(canvasFecha){
      ctx.font = '30px Supercell-Magic';
      ctx.fillStyle = "#dddce4";
      ctx.fillText(fecha,180, 200, canvas.width - 50);
      ctx.strokeText(fecha,180, 200, canvas.width - 50);
    }
    if(canvasHorario){
      ctx.font = '30px Supercell-Magic';
      ctx.fillStyle = "#dddce4";
      ctx.fillText(horario, 180, 290, canvas.width - 50);
      ctx.strokeText(horario, 180, 290, canvas.width - 50);
    }
    if(canvasLugar){
      ctx.font = '25px Supercell-Magic';
      ctx.fillStyle = "#dddce4";
      ctx.fillText(lugar, 180, 360, canvas.width - 50);
      ctx.strokeText(lugar, 180, 360, canvas.width - 50);
    }
    if(canvasinfoplus){
      ctx.font = '20px Supercell-Magic';
      ctx.fillStyle = "#dddce4";
      ctx.fillText(infoplus, 180, 390, canvas.width - 50);
      ctx.strokeText(infoplus, 180, 390, canvas.width - 50);
    }
    if(canvasCumple){
      ctx.font = '35px Supercell-Magic';
      ctx.fillStyle = "#f4ae05";
      ctx.fillText(cumpleañero, 350, 440, canvas.width - 50);
      ctx.strokeText(cumpleañero, 350, 440, canvas.width - 50);
    }
    let imgfinal = canvas.toDataURL('image/jpeg', 1.0);
    setImgData(imgfinal);
  }
  const showData = () =>{
    if(cumpleañero === ""){
      setMsgError("Rellene todos los campos!");
      setMensajeh3(false);
    }else{
      setMsgError("Descarga exitosa!");
      setMensajeh3(true);
      const link = document.createElement('a');

      const rawImage = imgData.replace("image/jpeg", "image/octet-stream");
      link.href = rawImage;
      link.download = `cumple-de-${cumpleañero}.jpg`;
      link.click();
      console.log(canvasCumple);
    }
  }

  if(msgError){
    setTimeout(()=>{
      setMsgError("");
    },3000);
  }

  return(
    <div className="clash">
      <section className="preview">

        <img src={`img/${imgFetched}`} id="templateimg" />
        <canvas id="canvas" width="240" height="297" />
      </section>

      <section className="estilos">
      <form onKeyUp={handleSubmit}>
        <input type="text" value={nameTemplate} onChange={handleTemplate} />
        <label> Mi edad </label>
        <input type="text" placeholder="Mi edad" value={miEdad} onChange={showEdad} />
        <label> Fecha del cumple.</label>
        <input type="text" placeholder="Ej: 03/12/19" maxLength="8" value={fecha} onChange={showFecha} />
        <label> En que horario </label>
        <input type="text" placeholder="Ej: 18 a 21 hs" value={horario} onChange={showHorario} />
        <label> Direccion </label>
        <input type="text" placeholder="Lugar del cumple" value={lugar} onChange={showLugar} />
        <input type="text" placeholder="+info" value={infoplus} onChange={showMasInfo} />
        <label> Mi nombre es </label>
        <input type="text" placeholder="Mi nombre es" value={cumpleañero} onChange={showCumple} />
      </form>


      <button onClick={showData} className="btndescarga"> Listo! </button>

      <h3 className={mensajeh3 ? 'pantallaok': 'pantallanotok'}>  {msgError}</h3>
      </section>




    </div>
  )
}

export default Clash;
