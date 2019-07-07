import React, {useState, useEffect } from 'react';
import './css/Clash.css';
import CanvasLoader from './CanvasLoader';



function Clash(){

  let canvasEdad, canvasFecha, canvasHorario, canvasLugar,canvasinfoplus, canvasCumple;
  let midata = {
    id : 0,
    imgUrl : '',
    imgTagName : '',
    edadFont : '',
    edadFontColor : '',
    edadX : 0,
    edadY : 0,
    fechaFont : '',
    fechaFontColor : '',
    fechaX : 0,
    fechaY : 0,
    horarioFont : '',
    horarioFontColor : '',
    horarioX : 0,
    horarioY : 0,
    lugarFont : '',
    lugarFontColor : '',
    lugarX : 0,
    lugarY : 0,
    infoplusFont: '',
    infoplusFontColor : '',
    infoplusX: 0,
    infoplusY : 0,
    cumpleFont: '',
    cumpleFontColor : '',
    cumpleX : 0,
    cumpleY: 0,
    descripcion : '',
    subido : ''
  }
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
  const [canvasInfo, setCanvasInfo] = useState([midata]);


  const traedata = () => {
      fetch("http://www.broeders.com.ar/includes/templates.php", {
        method: 'POST',
        headers: new Headers({
               'Content-Type': 'application/x-www-form-urlencoded',
      }),
      body: "imgTagName="+ nameTemplate
  })
    .then((response) => response.json())
    .then((json) => {
      const data = json;
      setCanvasInfo(data);
      console.log(canvasInfo[0].fechaFontColor);

    }
  )
    .catch((error) => {
      console.error(error);
  })

  };

  const handleTemplate = (e)=>{
    setNameTemplate(e.target.value);
    makeCanvas();
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

      ctx.font = canvasInfo[0].edadFont;
      ctx.fillStyle = canvasInfo[0].edadFontColor;
      ctx.fillText(miEdad, canvasInfo[0].edadX, canvasInfo[0].edadY, canvas.width - 50);
      ctx.strokeText(miEdad, canvasInfo[0].edadX, canvasInfo[0].edadY, canvas.width - 50);
    }
    if(canvasFecha){
      ctx.font = canvasInfo[0].fechaFont;
      ctx.fillStyle = canvasInfo[0].fechaFontColor;
      ctx.fillText(fecha,canvasInfo[0].fechaX, canvasInfo[0].fechaY, canvas.width - 50);
      ctx.strokeText(fecha,canvasInfo[0].fechaX, canvasInfo[0].fechaY, canvas.width - 50);
    }
    if(canvasHorario){
      ctx.font = canvasInfo[0].horarioFont;
      ctx.fillStyle = canvasInfo[0].horarioFontColor;
      ctx.fillText(horario, canvasInfo[0].horarioX, canvasInfo[0].horarioY, canvas.width - 50);
      ctx.strokeText(horario, canvasInfo[0].horarioX, canvasInfo[0].horarioY, canvas.width - 50);
    }
    if(canvasLugar){
      ctx.font = canvasInfo[0].lugarFont;
      ctx.fillStyle = canvasInfo[0].lugarFontColor;
      ctx.fillText(lugar, canvasInfo[0].lugarX, canvasInfo[0].lugarY, canvas.width - 50);
      ctx.strokeText(lugar, canvasInfo[0].lugarX, canvasInfo[0].lugarY, canvas.width - 50);
    }
    if(canvasinfoplus){
      ctx.font = canvasInfo[0].infoplusFont;
      ctx.fillStyle = canvasInfo[0].infoplusFontColor;
      ctx.fillText(infoplus, canvasInfo[0].infoplusX, canvasInfo[0].infoplusY, canvas.width - 50);
      ctx.strokeText(infoplus, canvasInfo[0].infoplusX, canvasInfo[0].infoplusY, canvas.width - 50);
    }
    if(canvasCumple){
      ctx.font = canvasInfo[0].cumpleFont;
      ctx.fillStyle = canvasInfo[0].cumpleFontColor;
      ctx.fillText(cumpleañero, canvasInfo[0].cumpleX, canvasInfo[0].cumpleY, canvas.width - 50);
      ctx.strokeText(cumpleañero, canvasInfo[0].cumpleX, canvasInfo[0].cumpleY, canvas.width - 50);
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

        <img src={`img/${canvasInfo[0].imgUrl}`} id="templateimg" />
        <canvas id="canvas" width="240" height="297" />
      </section>

      <section className="estilos">

      <form>
      <input type="text"  onKeyUp={handleTemplate} />
      </form>

      <form onKeyUp={handleSubmit}>

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
