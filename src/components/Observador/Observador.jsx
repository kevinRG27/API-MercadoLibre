import React,{Fragment,useState,useEffect} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Imagenes from '../Imagenes/Imagenes';
import Returner from '../Returner/Returner'

import './Observador.css'

const Observador = () => {
  let query = window.location.pathname;
  const enlace = query.split(":");
  const idProduct = enlace[1];

  const [product, setproduct] = useState([])
  const [seller, setseller] = useState('')
  const [description, setdescription] = useState('')


  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/items/${idProduct}`)
    .then(response => response.json())
    .then(product => setproduct(product))
  },[idProduct])

  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/items/${idProduct}/descriptions`)
    .then(response => response.json())
    .then(descripcion => setdescription(descripcion[0].plain_text))
  },[idProduct])

  useEffect(()=>{
    fetch(`https://api.mercadolibre.com/users/${product.seller_id}`)
    .then(response => response.json())
    .then(seller => setseller(seller.nickname))
  },[product])

  return(
    <Fragment>
      <Header 
      titulo= "Mercado Libre By Kevin"/>
      

      <div className="contenedor_">
           <div className="contenedor__">

              <div className="contenedor-img">
                <Imagenes pictures = {product.pictures} />
              </div>
              <div className="contenedor-detalle">
                
                <p className="p_name">{product.title}</p>
                <p className="p_precio">${product.price}</p>
                <p>Vendido por:</p> <p className="seller">{seller}</p>
              </div> 
                
              
           </div>
           <div className="contenedor-abajo">
              <div className="contenedor_btn">
                  <Returner></Returner>
              </div>
              <div className="contenedor-descrip">
                <p className="descrip_p">Descripción:</p> 
                <p className="p_descrip">{ description}</p>
              </div>  
           </div>
           
          
      </div>
      
      <Footer />
    </Fragment>
)
}
 
export default Observador;

