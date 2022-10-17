import Boton from './Boton';
import giro from '../giro.png';
import { useState } from 'react';
import Texto from './Texto';

const ActividadSet = () => {

    const [girar, setGirar] = useState(true); 

    return ( 
        <>
            <Texto parrafo='Usamos el operador condicional ternario y el useState para hacer girar o detener la imagen '/>
        
            <div className='big-cont'>
                
                <Boton mensaje={girar ? 'Hacer girar' : 'Detener'} onClick={() => setGirar(!girar) }/>
                <img className={girar ? '' : 'girar'} style={{width: '50px'}} src={giro} alt="imagen" /> 
            </div>
        </> 
    );
}
 
export default ActividadSet;