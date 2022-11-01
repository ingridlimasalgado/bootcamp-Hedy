import { useState, useEffect } from "react";
import Texto from "./Texto";

const Eventos = () => {

    const [posicion, setPosicion] = useState('center');
    const [formato, setFormato] = useState(true);
    const [color, setColor] = useState('');

    const cambiarPosicion = () =>{
        switch(posicion){
            case 'center':
                setPosicion('left');
                break;
            case 'left':
                setPosicion('right');
                break;            
            case 'right': 
                setPosicion('center');
                break;
            default:
                setPosicion('center');
        }
    }

    const detectKeydown = (e) =>{
        if(e.key==='q'){
            setColor('estilo');
        } else {
            setColor('');
        }
    }
    useEffect(() => {
      document.addEventListener('keydown', detectKeydown)
    }, []);

    

    return (  
        <>
            <Texto parrafo='Uso de eventos para modificar estilos en el jsx'/>
            <div>
                <h1 className={posicion} onClick={ ()=>cambiarPosicion() } >Clickea este título</h1>

                <p className={color}>You can change this paragraph's style with the 'q' key, and return with another key. <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores odio in quae rerum beatae! Debitis repudiandae at eos sequi tempora sunt perferendis earum, labore error, minima ducimus qui asperiores exercitationem?
                Amet, neque temporibus? Explicabo fugiat culpa architecto optio ut voluptatibus eligendi voluptatum delectus molestiae rerum animi, quisquam et adipisci perspiciatis sunt, ipsum laboriosam sint quidem doloribus nulla iure. Magnam, corrupti.
                Architecto facere nihil quod! Corporis, saepe aliquid. Hic animi impedit ex inventore quam cum iusto, dicta unde similique odit soluta praesentium molestiae quas iste cupiditate! <b className={formato? 'estilo' : ''} onClick={()=>setFormato(!formato)}>También podés dar click acá</b>
                </p>
            </div>
        </>
    );
}
 
export default Eventos;