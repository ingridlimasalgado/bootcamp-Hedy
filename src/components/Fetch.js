import { useState } from "react";
import Texto from "./Texto";

const Fetch = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('' || 'Nombre?');
    const [lastname, setLastName] = useState('' || 'Apellido?');
    const [mail, setMail] = useState('' || 'E-mail?');

    const [getId, setGetId] = useState('');
    const [getName, setGetName] = useState('');
    const [getLastName, setGetLastName] = useState('');
    const [getMail, setGetMail] = useState('');

    const [postId, setPostId] = useState(0);

    const [deleteName, setDeleteName] = useState('');
    const [deleteLastName, setDeleteLastName] = useState('');
    const [deleteMail, setDeleteMail] = useState('');


    const URL= 'https://6333768e433198e79dc5363c.mockapi.io/Alumnos/';
    
    const GetData = async () => {
        try{
            const response = await fetch (URL + id);
            if(!response.ok) throw new Error('No encontrado :(');
            const data = await response.json();

            setGetId(data.id);
            setGetName(data.name);
            setGetLastName(data.lastname);
            setGetMail(data.mail);
            
        }
        catch (err){
            console.log(err);
        }
    }

    const PostData = async ()=> {
        const requestOptions = {
            method : 'POST',
            headers: { 'Content-Type': 'application/json'}, 
            body: JSON.stringify({name, lastname, mail})
        };
        const response = await fetch ( URL, requestOptions);
        const data = await response.json();

        setPostId(data.id);

        setName(data.name);
        setLastName(data.lastname);
        setMail(data.mail);

        alert('Se agregó un nuevo alumno con id: '+data.id);
    }

    const DeleteData = async() => {
        const response = await fetch(URL + id, {method: 'DELETE'});
        const data = await response.json();
        setDeleteName(data.name);
        setDeleteLastName(data.lastname);
        setDeleteMail(data.mail);

        alert('Alumno borrado');
    }

    function handleChange(e) {
        setId(e.target.value);
    }

    // function handleTextChange(e){
    //     setName(e.target.value);
    //     // setLastName(e.target.value);
    //     // setMail(e.target.value);
    // }
    function subirNombre(e){
        setName(e.target.value);
    }
    function subirApellido(e){
        setLastName(e.target.value);
    }
    function subirMail(e){
        setMail(e.target.value);
    }


    return (  
        <>
        <Texto parrafo='Formulario para agregar, buscar y eliminar alumnos de MockAPI usando FETCH, funciones async y hooks'/>
        <div className="big-cont">
            <h1>Prueba con Fetch</h1>
                
            <div className="mini-cont">
                <h2>Ingrese un nuevo alumno: </h2>

                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" onChange={subirNombre}/>

                <label htmlFor="lastname">Apellido</label>
                <input type="text" id="lastname" lastname="lastname" onChange={subirApellido}/>

                <label htmlFor="mail">E-mail</label>
                <input type="text" id="mail" name="mail" onChange={subirMail}/>

                <button onClick={()=>PostData()}>Post</button>
            </div>

            <div className="mini-cont">
                <h2>Busque alumno por su ID</h2>

                <label htmlFor="id">Nro ID: </label>
                <input value={id} name='id' onChange={handleChange} />
                <button onClick={()=> GetData()}>Get</button>
                
                <p>ID: {getId}</p>
                <p>Nombre: {getName}</p>
                <p>Apellido: {getLastName}</p>
                <p>E-mail: {getMail}</p>

            
            </div>

            <div className="mini-cont">
                <button onClick={()=> DeleteData()}>Delete</button>
                <p>Alumno borrado: {deleteName}, {deleteLastName}</p>
            </div>

        </div>
        </>
    );
}
 
export default Fetch;