import { Link, useParams } from "react-router-dom";
import Texto from "./Texto";

export const Clase = () => {
    const {id} = useParams();
    if (id>2) {
        return <h2>Clase Nro: {id} NO ENCONTRADA</h2>
    } else return (
        <h2>Clase Nro: {id}</h2>
    )
    
}
const RutaClases = () => {
    return (  
        <>
            <Texto parrafo='Lista de clases para practicar con rutas con useParams() y sus respectivos Link' />
            <div className="big-cont">
                <h1>Clases:</h1>
                <Link className='link_to' to={'/clase/1'}>Clase 1</Link>
                <Link className='link_to' to={'/clase/2'}>Clase 2</Link>
            </div>
        </>
    );
}
 
export default RutaClases;