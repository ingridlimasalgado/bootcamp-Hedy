import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState();
    const [imagen, setImagen] = useState();
    const personajes = [
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/King-512.png',
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Elf-512.png',
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Monster-512.png',
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Grim_Reaper-512.png',
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Knight-512.png',
        'https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Orc-512.png'
    ];
    const [input, setInput] = useState({});

    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }

    const guardarImg = (e) => {
        setImagen(e.target.value);
    }

    function enviarFormulario (e) {
        e.preventDefault();
        
        setInput({nombre: nombre, imagen: imagen});
        
        alert('formulario enviado');
    }

    console.log(input);
    

    return (  
        <>
        <h1>Cree su personaje</h1>
        <form onSubmit={enviarFormulario}>

            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id='nombre' name='nombre' value={nombre} onChange={guardarNombre}/>
            </div>

            <div className="radio-img" value={imagen} onChange={guardarImg}>
                <label htmlFor="imagen">Elije el personaje: </label> 

                
                <input type="radio" id="rey" name="fav_language" value={personajes[0]}/>
                <label htmlFor="rey">
                    <img src={personajes[0]} alt="rey" />
                </label>

                <input type="radio" id="princess" name="fav_language" value={personajes[1]}/>
                <label htmlFor="princess">
                    <img src={personajes[1]} alt="princess" />
                </label>

                <input type="radio" id="dragon" name="fav_language" value={personajes[2]}/>
                <label htmlFor="dragon">
                    <img src={personajes[2]} alt="dragon" />
                </label>

                <input type="radio" id="death" name="fav_language" value={personajes[3]}/>
                <label htmlFor="death">
                    <img src={personajes[3]} alt="death" />
                </label>

                <input type="radio" id="knigth" name="fav_language" value={personajes[4]}/>
                <label htmlFor="knigth">
                    <img src={personajes[4]} alt="knigth" />
                </label>

                <input type="radio" id="orc" name="fav_language" value={personajes[5]}/>
                <label htmlFor="orc">
                    <img src={personajes[5]} alt="orc" />
                </label>
            </div>

            <button type="submit">Enviar</button>
            
        </form>

        <p>Mi nombre es {nombre || "[nombre]"}, soy <img src={imagen} alt="" /></p>
        </>
    );
}
 
export default Formulario;