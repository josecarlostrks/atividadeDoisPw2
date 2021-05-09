import React, {useEffect, useState} from 'react';
import ContatoForm from "./components/ContatoForm";
import UsuarioForm from "./components/UsuarioForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';
import Contatos from "./components/Contatos";

import './App.css';



function Agenda() {

  const valoresIniciais = {
    username: 'carlos',
    email: 'carlos@gmail.com',
    password: 'videos',
  }

	let [user, setUser] = useState(valoresIniciais);

  const onContatoChange = (name, value) => {
    let contatoCopia = Object.assign({}, novoContato);
    contatoCopia[name] = value;

    setNovoContato(contatoCopia);
  };

  	function cadastrarUsuario(evt){

  		const requestOptions = {
        	method: 'POST',
        	headers: { 'Content-Type': 'application/json' },
        	body: JSON.stringify({user})
    	};
    try{

    	const response = fetch('http://localhost:3000/user/register/',requestOptions);
    	const data = response.json();
        console.log(data);
    }catch(error){
    	console.log(error);

    }
  };




  const salvarContato = (evt) => {
    let contatosCopia = [...contatos];
    contatosCopia.push(novoContato);
    setContatos(contatosCopia);
    setNovoContato({ nome: '', telefone: '' });
    console.log(retorno);
  };




  return (
    <React.Fragment>
      <Navegacao cadastro={cadastrarUsuario}/>
      <Main />
    </React.Fragment>
  );
}

function Navegacao(props) {
  return (
    <header>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1 nav-titulo">Agenda</span>
          <button type="button" className="btn btn-primary" data-toggle="modal"
                  data-target="#usuarioModal" >
            Cadastre-se
          </button>
         
          <React.Fragment>
            <UsuarioForm />
          </React.Fragment>
      </nav>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <div className="container main-section">
      	<Rastreador caminho="Contatos" />
        <button type="button" className="btn btn-primary" data-toggle="modal"
                  data-target="#contatoModal" >
            Cadastrar Contato
        </button> 
        <ContatoForm />
        <Contatos />
      </div>
    </section>
  );
}

function Rastreador(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb rastreador bg-white">
        <li className="breadcrumb-item active">{props.caminho}</li>
      </ol>
    </nav>
  );
}




function App() {
  return (
    <Agenda />
  );
}

export default App;
