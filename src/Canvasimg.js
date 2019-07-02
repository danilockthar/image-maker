import React, {useState, useEffect } from 'react';
import './css/Canvasimg.css';



function Canvasimg() {

  // declaro las variables a usar dentro de las funciones //
  let canvastext, canvastext2, inputfile, filesimg, invisibleinput;

  // states //
  const [tamaFont, setTamaFont] = useState(70);
  const [color, setColor] = useState("white");
  const [valor, setValor] = useState(10);
  const [contorno, setContorno] = useState(true);
  const [radio, setRadio] = useState("stroke");
  const [valorimg, setValorimg] = useState("");
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");
  const [disparador, setDisparador] = useState(0);


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
  //


// Cambios de valor del input Range (Barra drag and drop )//


  const handleInput = (e) =>{
    setValor(e.target.value);
  }

  let colorcanvas = "white";

  const changecolors = ()=>{

    if(valor >= 10){
      setColor("white");
    }
    if(valor >= 20){
      setColor("red");
    }
    if(valor >= 30){
      setColor("black");
    }
    if(valor >= 40){
      setColor("gold");
    }
    if(valor >= 50){
      setColor("dodgerblue");
    }
    if(valor >= 60){
      setColor("green");
    }
    if(valor >= 70){
      setColor("pink");
    }
  }

  useEffect(()=>{
    changecolors();
    handleSubmit();

  },[valor])

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
      ctx.font = tamaFont + 'px Arial';
      ctx.textAlign = "center";
      ctx.strokeStyle = "black";
      ctx.lineWidth = tamaFont / 30;
      ctx.fillStyle = color;

      if(canvastext){
        // filltext toma 3 parametros, x , y, y tamaño maximo, en este caso especifico que no sobrepase el width.//
        ctx.fillText(canvastext,canvas.width / 2, tamaFont, canvas.width);

        if(contorno){
          ctx.strokeText(canvastext,canvas.width / 2, tamaFont, canvas.width);
        }else{
          console.log("no stroke");
        }
      }

      if(canvastext2){
        ctx.fillText(canvastext2,canvas.width / 2 , canvas.height - 14 , canvas.width);
        if(contorno){
          ctx.strokeText(canvastext2,canvas.width / 2 , canvas.height - 14 , canvas.width);
        }else{
          console.log("no stroke");
        }
      }
  }


  return (
      <div className="canvas">
        <form onKeyUp={handleSubmit}>
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
          <input className="inputfontsize" type="range" value={tamaFont} min="0" max="150" onChange={handleFontSize}/>
          </form>
          <h3> Color: {valor} </h3>
          <form>
          <input className="inputRango" type="range" value={valor} min="0" max="100" onChange={handleInput}/>
          </form>
        <img src={`./img/${valorimg}.jpg`} className="memeimg" id="memeimg"/>

        <canvas id="mycanvas" className="micanvas" width="240" height="297" />



      </div>
  )
}


export default Canvasimg;
