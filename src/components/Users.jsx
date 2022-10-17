import { useState, useEffect } from "react";
import Texto from "./Texto";

const Users = () => {

    const URL = 'https://6333768e433198e79dc5363c.mockapi.io/users/';
    const [user, setUser] = useState();

    const fetchApi = async () => {
        const respuesta = await fetch(URL);
        // console.log(respuesta.status);
        const respuestaJSON = await respuesta.json();
        // console.log(respuestaJSON)
        setUser(respuestaJSON);
    }

    useEffect(() => {
        fetchApi();
    }, []); 

    return (
        <>
        <Texto parrafo='Primer uso de Fetch para visualizar una lista de usuarios desde MockAPI'/>
        <div className="big-cont">
            <h1>Datos de los usuarios</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Teléfono</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                    
                <tbody>
                    {
                        
                        !user ? console.log('Cargando') : user.map((user, index)=>
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.tel}</td>
                                <td>{user.mail}</td>
                            </tr>
                        )
                    }
                    
                </tbody>
            </table>
            
        </div>
        </>
    );
}
 
export default Users;