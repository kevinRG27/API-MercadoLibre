import React from 'react';
import App from './App';
import Observador from './components/Observador/Observador';
import {
    BrowserRouter as Router,
    Route  } from "react-router-dom";

const Main = () => {
    return (
         <div>  
             <Router>
                <Route exact path="/">
                    <App></App>
                </Route >
                <Route exact path="/detalle:id">
                    <Observador></Observador>
                </Route>
            </Router>
         </div>
      );
}
 
export default Main;

