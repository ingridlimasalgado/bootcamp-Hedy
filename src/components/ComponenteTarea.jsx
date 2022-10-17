import { useState } from "react";
import Texto from "./Texto";

const ComponenteTarea = () => {

    const [contador, setContador] = useState(0);
    const [marca, setMarca] = useState(true);
  
    const cambiarMarca = () => setMarca(!marca);

    const numeroRandom = () => setContador(contador + Math.floor( (Math.random() * 10)))

    return (  
        <>
        <Texto parrafo='Primeros usos del useState'/>
        <div className="big-cont">
            <h1 onClick={ cambiarMarca }>Marca { marca ? 'Fiat' : "Toyota" }</h1> 
            
            <p>Contador: {contador}</p>
            <button onClick={ numeroRandom }>Suma random</button>
        </div>
        </>
    );
}
 
export default ComponenteTarea;

// Actividad: 
// 1-Crear un componente que renderice la marca de un auto, un contador y un botón.
// 2-Al hacer click en la marca del auto, el componente se tiene que poder re renderizar y mostrar otra marca a elección del programador.

// 3-Al hacer click en el botón, al contador se le tiene que sumar un número aleatorio entre un valor mínimo y máximo a elección del programador.

//            (OPCIONAL:)
//            4- renderizar todos los elementos de 
//            un componente reactivo que sea una lista 
//            a eleccion del programador
//            (tiene que usar useState)
