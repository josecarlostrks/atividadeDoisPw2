import React, {useState, useEffect} from 'react';
import Contatos from "../components/Contatos";
import UiContainer from "../components/UiContainer";
import { Link } from 'react-router-dom';



const Lista = () =>{


  return(

    <React.Fragment>
  	    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 nav-titulo">Agenda</span>
        <Link to="/create" type="button" className="btn btn-primary">Cadastre-se</Link>    
        <Link to="/login" type="button" className="btn btn-primary">Login</Link>


      </nav>
    </header>

    <UiContainer>
    	<Contatos />
    </UiContainer>

    </React.Fragment>

  );
};

export default Lista;