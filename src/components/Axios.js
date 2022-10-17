import { useState, useEffect } from "react";
import axios from "axios";
import Texto from "./Texto";


const Axios = () => {

    const [info, setInfo] = useState('');

    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false';

    const getData = async () => {
        try {
            const response = await axios.get(URL);
            setInfo(response.data);
        }
        catch(error){
            console.error("Hay un erroror"+error);
        }
    }

   useEffect(() => {
     getData()
   }, []);
   

    return (  
        <> 
        <Texto parrafo="Usamos una api para pedir datos de criptomonedas con AXIOS"/>
        <div className='big-cont'>
           

            <h1>Axios test</h1>
            <div className='mini-cont'>
                
                <ul>
                    {!info ? 'cargando' :
                    info.map( data => 
                        <li key={data.id}>
                            <p>Nombre: {data.name}</p>
                            <p>Símbolo: {data.symbol}</p>
                            <p>Precio actual: ${data.current_price}</p>
                            <p>MC: {data.market_cap}</p>
                            <p>MCR: {data.market_cap_rank}</p>
                            <img src={data.image} alt="imagen" />

                        </li>
                    )}
                </ul>
                
                {/* <p><span>Axios</span> GET Id: {!info ? 'cargando' : info[1].id}</p> */}
                
                
            </div>
            
        </div>
        </>
    );
}
 
export default Axios;