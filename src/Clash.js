import React, {useState, useEffect } from 'react';
import './css/Clash.css';
import LowNav from './LowNav';
import 'font-awesome/css/font-awesome.min.css';


function Clash(){


  let imagen = document.getElementById('templateimg');
  let canvas = document.getElementById('canvas');
  let midata = {
    id : 0,
    imgUrl : 'cumplepak.jpg',
    imgTagName : '',
    edadFont : '50px Arial',
    edadFontColor : '',
    edadX : 0,
    edadY : 0,
    fechaFont : '50px Arial',
    fechaFontColor : '',
    fechaX : 0,
    fechaY : 0,
    horarioFont : '50px Arial',
    horarioFontColor : '',
    horarioX : 0,
    horarioY : 0,
    lugarFont : '50px Arial',
    lugarFontColor : '',
    lugarX : 0,
    lugarY : 0,
    infoplusFont: '50px Arial',
    infoplusFontColor : '',
    infoplusX: 0,
    infoplusY : 0,
    cumpleFont: '50px Arial',
    cumpleFontColor : '',
    cumpleX : 0,
    cumpleY: 0,
    descripcion : '',
    subido : ''
  }
  let data = [midata];
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [miEdad, setMiEdad] = useState("");
  const [fecha, setFecha] = useState("");
  const [horario, setHorario] = useState("");
  const [lugar, setLugar] = useState("");
  const [infoplus, setInfoplus] = useState("");
  const [cumpleañero, setCumpleañero] = useState("");
  const [imgData, setImgData] = useState("");
  const [msgError, setMsgError] = useState("");
  const [mensajeh3, setMensajeh3] = useState(false);
  const [nameTemplate, setNameTemplate] = useState("");
  const [canvasInfo, setCanvasInfo] = useState([midata]);
  const [secondCount, setSecondCount] = useState(0);
  const [finishLoad, setFinishLoad] = useState(false);



  const fetchData = (e) =>{
    let dataname = e.target.getAttribute('data-value');
    console.log(dataname);
    setFinishLoad(false);
    setIsLoading(true);
    fetch("http://www.broeders.com.ar/includes/templates.php", {
      method: 'POST',
      headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body: "imgTagName="+ dataname
    })
      .then((response) => response.json())
      .then((json) => {
        data = json;
        setCanvasInfo(data);
        setIsLoading(false);
        setCount(count + 1);
        setFinishLoad(true);
      }
    )
      .catch((error) => {
        console.error(error);
    })
  }
    const setNombre = (e)=>{
      let name = e.target.getAttribute('data-value');
      setNameTemplate(name);


    }
    useEffect(()=>{
        makeCanvas();
    },[count])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[miEdad])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[fecha])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[horario])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[lugar])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[infoplus])
    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },200);
    },[cumpleañero])


    useEffect(()=>{
      const timer = setTimeout(()=>{
        makeCanvas();
      },300);
    },[count])


  const handleSubmit = () =>{

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
    ctx.font= '30px Arial';
    ctx.fillStyle = 'black';

    if(miEdad){

      ctx.font = canvasInfo[0].edadFont;
      ctx.fillStyle = canvasInfo[0].edadFontColor;
      ctx.fillText(miEdad, canvasInfo[0].edadX, canvasInfo[0].edadY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
        ctx.strokeText(miEdad, canvasInfo[0].edadX, canvasInfo[0].edadY, canvas.width - 50);
      }

    }
    if(fecha){
      ctx.font = canvasInfo[0].fechaFont;
      ctx.fillStyle = canvasInfo[0].fechaFontColor;
      ctx.fillText(fecha,canvasInfo[0].fechaX, canvasInfo[0].fechaY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
        ctx.strokeText(fecha,canvasInfo[0].fechaX, canvasInfo[0].fechaY, canvas.width - 50);
      }

    }
    if(horario){
      ctx.font = canvasInfo[0].horarioFont;
      ctx.fillStyle = canvasInfo[0].horarioFontColor;
      ctx.fillText(horario, canvasInfo[0].horarioX, canvasInfo[0].horarioY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
        ctx.strokeText(horario, canvasInfo[0].horarioX, canvasInfo[0].horarioY, canvas.width - 50);
      }

    }
    if(lugar){
      ctx.font = canvasInfo[0].lugarFont;
      ctx.fillStyle = canvasInfo[0].lugarFontColor;
      ctx.fillText(lugar, canvasInfo[0].lugarX, canvasInfo[0].lugarY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
        ctx.strokeText(lugar, canvasInfo[0].lugarX, canvasInfo[0].lugarY, canvas.width - 50);
      }

    }
    if(infoplus){
      ctx.font = canvasInfo[0].infoplusFont;
      ctx.fillStyle = canvasInfo[0].infoplusFontColor;
      ctx.fillText(infoplus, canvasInfo[0].infoplusX, canvasInfo[0].infoplusY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
          ctx.strokeText(infoplus, canvasInfo[0].infoplusX, canvasInfo[0].infoplusY, canvas.width - 50);
      }

    }
    if(cumpleañero){
      ctx.font = canvasInfo[0].cumpleFont;
      ctx.fillStyle = canvasInfo[0].cumpleFontColor;
      ctx.fillText(cumpleañero, canvasInfo[0].cumpleX, canvasInfo[0].cumpleY, canvas.width - 50);
      if(canvasInfo[0].stroke === 1){
        ctx.strokeText(cumpleañero, canvasInfo[0].cumpleX, canvasInfo[0].cumpleY, canvas.width - 50);
      }

    }
    let imgfinal = canvas.toDataURL('image/jpeg', 1.0);
    setImgData(imgfinal);

  }
  const showData = () =>{
    if(cumpleañero === ""){
      setMsgError("Rellene todos los campos!");
      setMensajeh3(false);
    }else{

      const link = document.createElement('a');

      const rawImage = imgData.replace("image/jpeg", "image/octet-stream");
      link.href = rawImage;
      link.download = `cumple-de-${cumpleañero}.jpg`;
      link.click();
      setMsgError(`cumple-de-${cumpleañero}.jpg ha sido descargado con exito!`);
      setMensajeh3(true);
    }
  }

  if(msgError){
    setTimeout(()=>{
      setMsgError("");
    },5000);
  }

  return(
    <div className="clash">

    <LowNav setNombre={fetchData} />

    <section className='templateCard'>
      <img src='img/marco2.png' className='marcoimg' />
      <section className="preview">
        {isLoading ? <img src="img/puff.svg" className="loadercapa" /> : <canvas id="canvas" width="700" height="450" />}

        <img src={`img/${canvasInfo[0].imgUrl}`} id="templateimg" />

      </section>
      {finishLoad && <h1 className='reloadMsg'> <img src='img/spinning-circles.svg' className="refreshIcon" /> reload the page </h1>}
      <section className="estilos">

      <form onKeyUp={handleSubmit} className="datosform">

        <input type="text" className='inputEdad' placeholder="10" value={miEdad} maxLength="2" onChange={showEdad} />

        <input type="text" className='inputFecha' placeholder="03/12/19"  value={fecha} onChange={showFecha} />

        <input type="text" className='inputHorario' placeholder="18 a 21 hs" maxLength="10" value={horario} onChange={showHorario} />

        <input type="text" className='inputLugar' placeholder="dirección" value={lugar} onChange={showLugar} />
        <input type="text" placeholder="+ info" className='inputInfo' value={infoplus} onChange={showMasInfo} />
        <input type="text" placeholder="mi nombre es" className='inputCumple' value={cumpleañero} onChange={showCumple} />
      </form>


      <button onClick={showData} className="btndescarga"> Listo ! </button>

      <h3 className={mensajeh3 ? 'pantallaok': 'pantallanotok'}>  {msgError}</h3>

      </section>


    </section>
    <div class='footerdiv'>
      <h3>Amigurises  © 2019 - creado por <a href='http://www.broeders.com.ar/' target='new_blank'>Dani Arroyo</a></h3>
    </div>
    </div>
  )
}

export default Clash;
