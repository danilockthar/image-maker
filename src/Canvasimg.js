import React, {useState, useEffect } from 'react';
import './css/Canvasimg.css';



function Canvasimg() {

  // declaro las variables a usar dentro de las funciones //
  let canvastext, canvastext2, inputfile, filesimg;

  // states //
  const [inputTop, setInputTop] = useState("");
  const [inputBottom, setInputBottom] = useState("");
  const [disparador, setDisparador] = useState(0);




  const handleSubmit = (e) =>{
    e.preventDefault();

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

  const handleFile = (e) =>{
    let files = e.target.files[0].name;
    filesimg = files;
  }

  const makeCanvas = () =>{
      let button = document.getElementById('descargarbutton');
      let imagen = document.getElementById('imgcanvas');
      let canvas = document.getElementById('mycanvas');
      let ctx = canvas.getContext("2d");

      canvas.width = imagen.width;
      canvas.height = imagen.height;
      ctx.clearRect(10, 0, canvas.width, canvas.height);
      console.log(filesimg);
      ctx.drawImage(imagen, 0, 0);
      ctx.font = '30px Open Sans';
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      if(canvastext){
        // filltext toma 3 parametros, x , y, y tamaño maximo, en este caso especifico que no sobrepase el width.//
        ctx.fillText(canvastext,canvas.width / 2, 30, canvas.width);
      }
      if(canvastext2){
        ctx.fillText(canvastext2,canvas.width / 2 ,260, canvas.width);
      }


  }


  return (
      <div className="canvas">
        <form onSubmit={handleSubmit}>
        <input type="file" id="inputfile"  onChange={handleFile} />
        <input type="text" placeholder="Texto Top" value={inputTop} onChange={handleInputTop}/>
        <input type="text" placeholder="Texto bottom" value={inputBottom} onChange={handleInputBottom} />


        <input type="submit" />
        </form>
        <img src="./img/img_the_scream.jpg" id="imgcanvas" />
        <canvas id="mycanvas" className="micanvas" width="240" height="297" />
        <button onClick={makeCanvas} > Generar </button>
        <a href="#!" target="_blank" id="descargarbutton"> Descargar </a>

      </div>
  )
}


export default Canvasimg;
