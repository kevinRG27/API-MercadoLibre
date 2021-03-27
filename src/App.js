import React, {Fragment, useState, useEffect} from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Product from './components/Producto/Product'
import Paginador from './components/Paginador/Paginador'
import Form from './components/Form/Form'

function App() {

const[objeto,setObjeto]=  useState('');
const[products, setProducts] = useState([]);
const[offset, setOffset] = useState(0);
const[submitValue,setSubmitValue] = useState('tecnologia');


useEffect(() => {
  fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${submitValue}+&offset=${offset}`)
  .then(response => response.json())
  .then(products => setProducts(products.results))
  }, [submitValue,offset])


const actualizarState = e => {
  setObjeto(e.target.value)
}

const actualizarOffset = e => {
  if(e.target.id === 'buttonFork'){
    setOffset(offset+50);
  }else if(offset===0 && e.target.id === 'buttonBack'){
  
  }else if(e.target.id === 'buttonBack'){
    setOffset (offset-50);
  }
}

const handleSubmit = e => {
  e.preventDefault()
  setSubmitValue(objeto)
}


  return (
    <Fragment>
    
      <Header 
        titulo= "Mercado Libre By Kevin"
      />

      <Form 
        actualizarState={actualizarState}
        valor={objeto}
        handlerSubmit={handleSubmit}
      />
      <Product 
        objetoBuscar = {products} 
      />

      <Paginador 
        actualizarOffset={actualizarOffset}
      />
      <Footer />
   
    </Fragment>
  );
}

export default App;
