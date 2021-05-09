import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const UiContainer = ({children})=>(


    <section>
      <div className="container main-section">     
      	{children}
      </div>
    </section>

);
export default UiContainer;