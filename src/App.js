import logo from "./logo.svg";
import "./App.css";
import "./Micss.css";
import imagen1 from "./imagenes/rey_atanagildo.png";
import imagen2 from "./imagenes/rey_ataulfo.png";
import imagen3 from "./imagenes/rey_ervigio.png";
import rey from "./imagenes/rey_incognito.png";

function App() {
  let nombres = ["Atanagildo", "Ataulfo", "Ervigio"];
const cambiarImagen = (e) =>{
  if(e.target.src.includes("incognito")){
    e.target.style.visibility="hidden";
  } else{
    e.target.src=rey;
  }
  e.target.parentNode.style.backgroundColor="white";
}

  const cambiarTexto = (e) => {
    if(e.target.innerHTML == "Visto"){
      e.target.innerHTML = "";
    } else {
      e.target.innerHTML="Visto";
    }
  };
  return (
    <div className="container">
      <div className="caja">
        <img onClick={cambiarImagen} src={imagen1} />
        <div onClick={cambiarTexto} className="nombre">
          {nombres[0]}
        </div>
      </div>
      <div className="caja">
        <img onClick={cambiarImagen} src={imagen2} />
        <div onClick={cambiarTexto} className="nombre">
          {nombres[1]}
        </div>
      </div>
      <div className="caja">
        <img onClick={cambiarImagen} src={imagen3} />
        <div onClick={cambiarTexto} className="nombre">
          {nombres[2]}
        </div>
      </div>
    </div>
  );
}

export default App;
