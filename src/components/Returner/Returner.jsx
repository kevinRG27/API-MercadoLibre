import React from 'react';
import {Link} from 'react-router-dom'
import './Returner.css'

const Returner = () => {
    return (
        <Link
            to="./"
        >
            <button>Volver</button>
        </Link>
     );
}
 
export default Returner;