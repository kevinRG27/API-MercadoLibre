import React from 'react';
import './Imagenes.css'
const Imagenes = ({pictures}) => {
    return ( 
        <>
        {pictures !== undefined ? 
        <img 
        src={pictures[0].url}
        alt="Imagen full hd 4k"
        className="imagenHd"></img>
        
        :null}
        </>
     );
}
 
export default Imagenes;