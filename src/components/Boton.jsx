const Boton = (props) => {
    return (
        <button style={{backgroundColor: 'green', color: 'white'}} onClick={props.onClick}>{props.mensaje}</button>
    );
}
 
export default Boton;


// const Button = (props) => {
//     return(
//         <button onClick={props.onClick}>{props.message}</button>
//     )
// }