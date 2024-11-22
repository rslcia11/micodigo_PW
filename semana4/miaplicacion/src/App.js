import logo from './logo.svg';
import Image from './components/image';
import gato from "./images/gatoCabreado.jpg";
import Button from './components/button';

function App() {
  let valorBoton ="";
  const lanzarAlerta = () => {

    alert("Soy una alerta")
  }
  return (
    <div>
      <header>
        <p>
          Hola
           <code>src/App.js</code> and save to reload.
        </p>
        <Image paramLogo={logo} />
        <Image paramLogo={gato} />
        <Button id={"alerta"} name={"alerta"} events={()=>{lanzarAlerta();}}/>

      </header>
    </div>
  );
}

export default App;
