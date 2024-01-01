import logo from "./logo.svg";
import "./App.css";
import "./Micss.css";
import imagen1 from "./imagenes/rey_atanagildo.png";
import imagen2 from "./imagenes/rey_ataulfo.png";
import imagen3 from "./imagenes/rey_ervigio.png";

function App() {
  let nombres = ["Atanagildo", "Ataulfo", "Ervigio"];
  return (
    <div className="container">
      <div className="caja">
        {nombres[0]}
        <img src={imagen1} className="img" />
      </div>
      <div className="caja">
        {nombres[1]}
        <img src={imagen2} className="img" />
      </div>
      <div className="caja">
        {nombres[2]}
        <img src={imagen3} className="img" />
      </div>
    </div>
  );
}

export default App;
