import logo from "./logo.svg";
import "./App.css";
import "./Micss.css";
import imagen1 from "./imagenes/rey_atanagildo.png";
import imagen2 from "./imagenes/rey_ataulfo.png";
import imagen3 from "./imagenes/rey_ervigio.png";

function App() {
  let reyes = [
    { nombre: "Atanagildo" },
    { nombre: "Ataulfo" },
    { nombre: "Ervigio" }
  ];
  return (
    <div className="App">
      <div className="atanagildo">
        {reyes[0].nombre}
        <img src={imagen1} className="img1" />
      </div>
      <div className="ataulfo">
        {reyes[1].nombre}
        <img src={imagen2} className="img2" />
      </div>
      <div className="ervigio">
        {reyes[2].nombre}
        <img src={imagen3} className="img3" />
      </div>
    </div>
  );
}

export default App;
