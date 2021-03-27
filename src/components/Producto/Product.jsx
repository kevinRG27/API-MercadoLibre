import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom'




const Product = ({objetoBuscar}) => {
        
       return ( 
        <div className="contenedor">
            {objetoBuscar.map(product =>
                
                <Link 
                    
                    id={product.id} 
                    key={product.id}
                    to={`./detalle:${product.id}`}
                    className="contenido"
                    idseller={product.seller.id}>                   
                    
                    <img src={product.thumbnail} alt="imagen no encontrada"></img>

                    <p>{product.title}</p>

                    <p className="p-precio">${product.price}</p>
                </Link>
                )}
        </div>
     );
}
 
export default Product;