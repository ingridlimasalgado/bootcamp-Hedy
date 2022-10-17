const Texto = (props) => {

    const {parrafo} = props;

    const estilo = {
        backgroundColor: 'white',
        color: 'grey',
        border: '1px solid black'
    }

    return (  
        <div style={estilo}>
            <h3> {parrafo} </h3>
        </div>
    );
}
 
export default Texto;