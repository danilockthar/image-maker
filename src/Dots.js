import React, {useState} from 'react';
import './css/Dots.css';


function Dots(props) {
  let passingcolor;

  const [color, setColor] = useState("white");


  const handleValue = (e) =>{
    passingcolor = e.target.getAttribute('data-value');
    console.log(passingcolor);
    

  }




  return(
    <div className="dots">
    <h3> el color es  </h3>
    <section className="packdots">
        <h3> mi color es {props.color} </h3>
        <span class="dot1" data-value="white" onClick={handleValue}></span>


          <span class="dot2" data-value="#F44336" onClick={handleValue}  ></span>


          <span class="dot3" data-value="#9C27B0" onClick={handleValue}></span>


          <span class="dot4" data-value="#673AB7" onClick={handleValue}></span>


          <span class="dot5" data-value="#3F51B5" onClick={handleValue}></span>


          <span class="dot6" data-value="#2196F3" onClick={handleValue}></span>


    </section>
    <section className="packdots">

        <span class="dot7" data-value="#03A9F4" onClick={handleValue}></span>


          <span class="dot8" data-value="#00BCD4" onClick={handleValue}></span>


        <span class="dot9" data-value="#009688" onClick={handleValue}></span>


        <span class="dot10" data-value="#4CAF50" onClick={handleValue}></span>


        <span class="dot11" data-value="#8BC34A" onClick={handleValue}></span>


        <span class="dot12" data-value="#CDDC39" onClick={handleValue}></span>


    </section>
    <section className="packdots">
        <span class="dot13" data-value="#FFEB3B" onClick={handleValue}></span>
        <span class="dot14" data-value="#FFC107" onClick={handleValue}></span>
        <span class="dot15" data-value="#FF9800" onClick={handleValue}></span>
        <span class="dot16" data-value="#FF5722" onClick={handleValue}></span>
        <span class="dot17" data-value="#795548" onClick={handleValue}></span>
        <span class="dot18" data-value="#000000" onClick={handleValue}></span>
    </section>
    <section className="packdots">
        <span class="dot19" data-value="#666666" onClick={handleValue}></span>
        <span class="dot20" data-value="#B3B3B3" onClick={handleValue}></span>
        <span class="dot21" data-value="#CCCCCC" onClick={handleValue}></span>
        <span class="dot22" data-value="#808080" onClick={handleValue}></span>
        <span class="dot23" data-value="#333333" onClick={handleValue}></span>
        <span class="dot24" data-value="#999999" onClick={handleValue}></span>
    </section>
    </div>

  )
}


export default Dots;
