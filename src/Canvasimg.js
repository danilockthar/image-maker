import React, {useState, useEffect } from 'react';
import './css/Canvasimg.css';



function Canvasimg() {

  // declaro las variables a usar dentro de las funciones //
  let canvastext, canvastext2, inputfile, filesimg, invisibleinput;

  // states //
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
    let invisible = document.getElementById('invisibleinput');
    invisible.value = "up";
    console.log(invisible.value);
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



  const makeCanvas = () =>{

      let imagen = document.getElementById('memeimg');
      let canvas = document.getElementById('mycanvas');
      let ctx = canvas.getContext("2d");

      canvas.width = imagen.width;
      canvas.height = imagen.height;
      ctx.clearRect(10, 0, canvas.width, canvas.height);

      ctx.drawImage(imagen, 0, 0);
      let fontSize = canvas.width / 8;
      ctx.font = fontSize + 'px Arial';
      ctx.textAlign = "center";
      ctx.strokeStyle = "black";
      ctx.lineWidth = fontSize / 30;
      ctx.fillStyle = "white";



      if(canvastext){
        // filltext toma 3 parametros, x , y, y tamaño maximo, en este caso especifico que no sobrepase el width.//
        ctx.fillText(canvastext,canvas.width / 2, canvas.width / 10, canvas.width);

        if(contorno){
          ctx.strokeText(canvastext,canvas.width / 2, canvas.width / 10, canvas.width);

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
        <img src={`./img/${valorimg}.jpg`} className="memeimg" id="memeimg"/>

        <canvas id="mycanvas" className="micanvas" width="240" height="297" />



      </div>
  )
}


export default Canvasimg;
