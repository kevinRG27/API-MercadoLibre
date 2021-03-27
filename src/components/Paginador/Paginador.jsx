import React from 'react';

const Paginador = ({actualizarOffset}) => {
    
    return(
    <div className="contenedor">
        <button id="buttonBack" className="buttonBack" onClick={actualizarOffset}>⏪</button>
        <button id="buttonFork" className="buttonFork" onClick={actualizarOffset}>⏩</button>
    </div>
)}
 
export default Paginador;