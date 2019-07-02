import React, {useState, useEffect } from 'react';
import './css/Canvasimg.css';



function Canvasimg() {

  // declaro las variables a usar dentro de las funciones //
  let canvastext, canvastext2, inputfile, filesimg;

  // states //
  const [contorno, setContorno] = useState(true);
  const [radio, setRadio] = useState("stroke");
  const [valorimg, setValorimg] = useState("");
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");
  const [disparador, setDisparador] = useState(0);


  const handleRadio = ()=>{

    console.log("elegist " + radio);
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
      let button = document.getElementById('descargarbutton');
      let imagen = document.getElementById('memeimg');
      let canvas = document.getElementById('mycanvas');
      let ctx = canvas.getContext("2d");

      canvas.width = imagen.width;
      canvas.height = imagen.height;
      ctx.clearRect(10, 0, canvas.width, canvas.height);
      console.log(filesimg);
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

        <input type="text" placeholder="Texto Top" value={inputTop} onChange={handleInputTop}/>
        <input type="text" placeholder="Texto bottom" value={inputBottom} onChange={handleInputBottom} />
        <input type="text" value={valorimg} onChange={handleValorimg} />

        <input type="submit" />
        </form>
        <h1> input radio </h1>
        <form onChange={handleRadio}>
        <input type="checkbox" value={contorno}  onChange={handleChange} />
        </form>
        <img src={`./img/${valorimg}.jpg`} className="memeimg" id="memeimg"/>
        <img src="./img/img_the_scream.jpg" id="imgcanvas" />
        <canvas id="mycanvas" className="micanvas" width="240" height="297" />
        <button onClick={makeCanvas} > Generar </button>
        <a href="#!" target="_blank" id="descargarbutton"> Descargar </a>

      </div>
  )
}


export default Canvasimg;
