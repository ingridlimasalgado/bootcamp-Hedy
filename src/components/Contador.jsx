import { useState, useEffect } from "react";
import Texto from "./Texto";

const Button = (props) => {
    return(
        <button onClick={props.onClick}>{props.message}</button>
    )
}

const Contador = () => {

    const [counter, setCounter] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [changeMes, setChangeMes] = useState("Eliminar botón");

    useEffect(() => {
        console.log("Funciona!");
    }, []) 
    //Este array hará que solo se ejecute en el primer renderizado, si quiero que haga cada vez que se actualice debo sacar el []
    

    return(
        <>
        <Texto parrafo='Operador ternario para usar hooks, y usamos el useEffect para indicar el inicio de ejecución.'/>
        <div className="big-cont">
            <p>Valor actual: {counter}</p>
            
            {showButton && <Button onClick={() => {setCounter(counter + 1)}} message="Click me!"/>}
            
            <Button onClick={() => {
                setShowButton(false); 
                setChangeMes("Botón eliminado")}} message={changeMes} />
        </div>
        </>
    )
}


export default Contador;

