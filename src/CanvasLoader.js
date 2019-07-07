import React,{useEffect, useState} from 'react';
import './css/CanvasLoader.css';

function CanvasLoader(props){

const [templateChoice, setTemplateChoice] = useState("clash-royale-template.jpg");
const [imgFetched, setImgFetched] = useState("");
const [data, setData] = useState([]);



const traedata = () => {
    fetch("http://www.broeders.com.ar/includes/templates.php", {
      method: 'POST',
      headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded',
    }),
    body: "imgUrl="+ templateChoice
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



const changeUrl = ()=>{
  setTemplateChoice('clash-royale-template.jpg');
}



  return(
    <div className='canvasLoader'>
        <button onClick={props.traedata} > Click </button>
        <img src={`img/${props.imgFetched}`} id="templateimg" />
        <canvas id="canvas" width="240" height="297" />
    </div>

  )
}


export default CanvasLoader;
