import React, {useState, useEffect } from 'react';
import './css/Canvasimg.css';
import Dots from './Dots';



function Canvasimg() {

  // declaro las variables a usar dentro de las funciones //
  let canvastext, canvastext2, passingcolor;

  // states //
  const [imgData, setImgData] = useState("");
  const [clicked, setClicked] = useState(false);
  const [tamaFont, setTamaFont] = useState(70);
  const [color, setColor] = useState("white");
  const [valor, setValor] = useState(10);
  const [contorno, setContorno] = useState(true);
  const [radio, setRadio] = useState("stroke");
  const [valorimg, setValorimg] = useState("");
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");

  const showData = () =>{
    if(imgData == "data:,"){
      console.log("No se pudo ejecutar el comando");
    }else{
      const link = document.createElement('a');

      const rawImage = imgData.replace("image/jpeg", "image/octet-stream");
      link.href = imgData;
      link.download = 'imagen.jpg';
      link.click();
      console.log(link);
    }


  }
  // Funcion que maneja el valor HEX del texto, heredada del componente Dots //
  const handleValue = (e) => {
      // paso el valueHEX  a la funcion make canvas //
      passingcolor = e.target.getAttribute('data-value');
      setColor(passingcolor);
        // -- //

        // aca defino el Dots que esta en foco //

      let all = document.getElementsByTagName('span');
      let x = e.target;
      let iduno = document.getElementById('dot1');

      for (let one of all){
        if(one == x) {
          if(iduno == x){

            iduno.style.borderRadius = "0px";
          }else{
            iduno.style.borderRadius = "50%";
          }
          x.style.transform = 'scale(1.3)';
          x.style.pointerEvents = 'none';
          x.style.background = "white";
          x.style.border = `3px solid ${passingcolor}`;
        }else{
          one.style.pointerEvents = 'initial';
          one.style.transform = 'translate(0px, 0px)';
          iduno.style.border = "2px solid #333";
          one.style.background = one.getAttribute('data-value');
          one.style.border = "none";
        }
      }
// -- //
  }
// -- //

  useEffect(()=>{

    handleSubmit();
  },[contorno])

  const changeState = ()=>{


    console.log("change");

  }

  const handleChange = (e)=>{
    setContorno(!contorno);
  }


  const handleValorimg = (e)=>{
    setValorimg(e.target.value);
  }

  const handleSubmit = (e) =>{
     canvastext = inputTop;
     canvastext2 = inputBottom;
     makeCanvas();
  }

  const handleInputTop = (e) =>{
    setInputTop(e.target.value);
  }


  const handleInputBottom = (e) =>{
    setInputBottom(e.target.value);
  }

  // Handle font size //
  const handleFontSize = (e) =>{
    setTamaFont(e.target.value);
  }

  useEffect(()=>{
    handleSubmit();
  },[tamaFont])


  const handleInput = (e) =>{
    setValor(e.target.value);
  }

  useEffect(()=>{
    handleSubmit();
  },[color])

//
  const makeCanvas = () =>{

      let imagen = document.getElementById('memeimg');
      let canvas = document.getElementById('mycanvas');
      let ctx = canvas.getContext("2d");

      canvas.width = imagen.width;
      canvas.height = imagen.height;
      ctx.clearRect(10, 0, canvas.width, canvas.height);

      ctx.drawImage(imagen, 0, 0);


      console.log(tamaFont);
      ctx.font = tamaFont + 'px Supercell-Magic';
      ctx.textAlign = "center";
      ctx.strokeStyle = "black";
      ctx.lineWidth = tamaFont / 30;

      ctx.fillStyle = color;

      if(canvastext){
        // filltext toma 3 parametros, x , y, y tamaño maximo, en este caso especifico que no sobrepase el width.//
        ctx.fillText(canvastext,canvas.width / 2, tamaFont - 15, canvas.width - 50);

        if(contorno){
          ctx.strokeText(canvastext,canvas.width / 2, tamaFont - 15, canvas.width - 50);
        }else{
          console.log("no stroke");
        }
      }

      if(canvastext2){
        ctx.fillText(canvastext2,canvas.width / 2 , canvas.height - 20 , canvas.width - 50);
        if(contorno){
          ctx.strokeText(canvastext2,canvas.width / 2 , canvas.height - 20 , canvas.width - 50);
        }else{
          console.log("no stroke");
        }
      }

      let imgfinal = canvas.toDataURL('image/jpeg', 1.0);
      setImgData(imgfinal);

  }

  return (
      <div className="canvas">
        <form className="forminput" onKeyUp={handleSubmit}>
        <input type="hidden" value="" id="invisibleinput" />
        <input type="text" placeholder="Texto Top" value={inputTop} onChange={handleInputTop}/>
        <input type="text" placeholder="Texto bottom" value={inputBottom} onChange={handleInputBottom} />
        <input type="text" value={valorimg} onChange={handleValorimg} />

        </form>
        <h1> input radio </h1>
        {/* Input checkbox para quitar o poner el contorno en textos de la imagen */}
        <form onChange={changeState}>
        <label> contorno </label>
        <input type="checkbox" checked={contorno} value={contorno}  onChange={handleChange} />
        </form>
          <h3>Tamaño: {tamaFont} </h3>
          <form>
          <input className="inputfontsize" type="range" value={tamaFont} min="60" max="150" onChange={handleFontSize}/>
          </form>
          <h3> Color: {color} </h3>
          <Dots data-info={clicked} handleValue={handleValue} data-click={clicked} />
          <button onClick={showData}> Show </button>
        <img src={`./img/${valorimg}.jpg`} className="memeimg" id="memeimg"/>

        <canvas id="mycanvas" className="micanvas" width="240" height="297" />



      </div>
  )
}


export default Canvasimg;
