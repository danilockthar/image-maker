import React, {useState} from 'react';
import './css/Dots.css';


function Dots(props) {

  let passingcolor;
  const handleValue = (e) =>{
    passingcolor = e.target.getAttribute('data-value');
    console.log(passingcolor);
    let x = e.target;
    // x.style.background = "white";
    // x.style.border = `3px solid ${passingcolor}`;
  }

  return(
    <div className="dots">


    <section className="packdots">

          <span id="dot1" data-info={props.datainfo}  data-value="white" data-click={props.clicked} onClick={props.handleValue}></span>
          <span id="dot2"  data-value="#F44336" onClick={props.handleValue}></span>
          <span id="dot3"  data-value="#9C27B0" onClick={props.handleValue}></span>
          <span id="dot4" data-value="#673AB7" onClick={props.handleValue}></span>
          <span id="dot5" data-value="#3F51B5" onClick={props.handleValue}></span>
          <span id="dot6" data-value="#2196F3" onClick={props.handleValue}></span>
    </section>
    <section className="packdots1">
          <span id="dot7" data-value="#03A9F4" onClick={props.handleValue}></span>
          <span id="dot8" data-value="#00BCD4" onClick={props.handleValue}></span>
          <span id="dot9" data-value="#009688" onClick={props.handleValue}></span>
          <span id="dot10" data-value="#4CAF50" onClick={props.handleValue}></span>
          <span id="dot11" data-value="#8BC34A" onClick={props.handleValue}></span>
          <span id="dot12" data-value="#CDDC39" onClick={props.handleValue}></span>
    </section>
    <section className="packdots2">
          <span id="dot13" data-value="#FFEB3B" onClick={props.handleValue}></span>
          <span id="dot14" data-value="#FFC107" onClick={props.handleValue}></span>
          <span id="dot15" data-value="#FF9800" onClick={props.handleValue}></span>
          <span id="dot16" data-value="#FF5722" onClick={props.handleValue}></span>
          <span id="dot17" data-value="#795548" onClick={props.handleValue}></span>
          <span id="dot18" data-value="#000000" onClick={props.handleValue}></span>
    </section>
    <section className="packdots3">
          <span id="dot19" data-value="#666666" onClick={props.handleValue}></span>
          <span id="dot20" data-value="#B3B3B3" onClick={props.handleValue}></span>
          <span id="dot21" data-value="#CCCCCC" onClick={props.handleValue}></span>
          <span id="dot22" data-value="#808080" onClick={props.handleValue}></span>
          <span id="dot23" data-value="#333333" onClick={props.handleValue}></span>
          <span id="dot24" data-value="#999999" onClick={props.handleValue}></span>
    </section>
    </div>

  )
}


export default Dots;
