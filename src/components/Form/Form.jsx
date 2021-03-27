import React from 'react';
import './Form.css'

const Form = ({actualizarState,valor,handlerSubmit}) => {

    

    return ( 
        <div className="padre">
           <div className="hijo">
               <div>
                    <form onSubmit={handlerSubmit}>
                        <input 
                        id="stringBuscar" 
                        className="inputBuscar" 
                        value={valor}
                        onChange={actualizarState}
                        type="text" 
                        placeholder="Ingresa el nombre del producto que deseas..."></input>
                        
                        <button onSubmit={actualizarState} id="buscarString" className="buttonBuscar">Search</button>
                    </form>
                </div>
            </div>  
           
        </div>

     );
}
 
export default Form;