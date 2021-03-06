import React, { useEffect, useState } from "react";
import "./css/lowNav.css";
import { FacebookShareButton, FacebookIcon } from "react-share";

function LowNav(props) {
  const [toggle, setToggle] = useState(false);
  const [categoria, setCategoria] = useState("todos");
  const [myInfo, setMyInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let templates, cantidad;
  let barra = document.getElementById("barra");
  let barrab = document.getElementById("barrab");
  let barrac = document.getElementById("barrac");
  const buttons = document.getElementsByClassName("botonProps");
  let hidden = document.getElementById("hiddenDiv");
  let fixedSearch = document.getElementById("fixedSearch");

  const fetchData = () => {
    setIsLoading(true);
    fetch("https://interdictory-sinks.000webhostapp.com/includes/categorias.php", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded"
      }),
      body: "categoria=" + categoria
    })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setMyInfo(json);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const setNombre = e => {
    let target = e.target.getAttribute("data-value");
  };
  const onChangeCat = e => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, [categoria]);

  if (myInfo.length > 0) {
    cantidad = myInfo.length;

    templates = myInfo.map(info => (
      <img
        src={`img/${info.imgUrl}`}
        onClick={props.setNombre}
        className="botonProps"
        id="bocaButton"
        data-value={`${info.imgTagName}`}
      />
    ));
  }

  for (let boton of buttons) {
    boton.addEventListener("click", () => {
      setToggle(false);
      hidden.style.height = "0px";
      barra.style.transform = "rotate(0deg) translateX(0px)";
      barra.style.transformOrigin = "top left";
      barrab.style.transform = "translateX(0px)";
      barrab.style.opacity = "1";
      barrac.style.transform = "rotate(0deg) translateX(0px)";
      barrac.style.transformOrigin = "bottom left";
      fixedSearch.style.display = "none";
    });
  }

  const toggleHideDiv = e => {
    if (!toggle) {
      console.log("true");
      setToggle(true);
      hidden.style.height = "90vh";
      barra.style.transform = "rotate(40deg)";
      barra.style.transformOrigin = "top left";
      barrab.style.transform = "translateX(-300px)";
      barrab.style.opacity = "0";
      barrac.style.transform = "rotate(-40deg) ";
      barrac.style.transformOrigin = "bottom left";
      fixedSearch.style.display = "block";
    } else {
      console.log("false");
      setToggle(false);
      hidden.style.height = "0px";
      barra.style.transform = "rotate(0deg) translateX(0px)";
      barra.style.transformOrigin = "top left";
      barrab.style.transform = "translateX(0px)";
      barrab.style.opacity = "1";
      barrac.style.transform = "rotate(0deg) translateX(0px)";
      barrac.style.transformOrigin = "bottom left";
      fixedSearch.style.display = "none";
    }
  };

  return (
    <div className="navLow">
      <nav className="lowNavBar">
        <div className="showTemps" onClick={toggleHideDiv}>
          <div className="barradiv">
            <div id="barra"></div>
            <div id="barrab"></div>
            <div id="barrac"></div>
          </div>
          <p> COLECCIÓN </p>
        </div>

      </nav>
      <div className="hideDiv" id="hiddenDiv">
        <div className="formContainer" id="fixedSearch">
          <form className="formaHidde">
            <div className="select">
              <select
                value={categoria}
                onChange={onChangeCat}
                className="selectInput"
              >
                <option value="todos"> Todas </option>
                <option value="futbol"> Futbol </option>
                <option value="videojuegos"> Videojuegos </option>
                <option value="dibujos animados"> Dibujos animados </option>
              </select>
            </div>
          </form>
          <p className="totalSearch"> Encontrados ({cantidad}) </p>
        </div>
        <div className="container">
          {isLoading ? (
            <img src="img/three-dots.svg" className="loadimg" />
          ) : (
            templates
          )}
        </div>
        <div className="hiddenFooter"></div>
      </div>
    </div>
  );
}

export default LowNav;
