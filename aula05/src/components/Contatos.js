import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Contato from './Contato';
import { Link } from 'react-router-dom';


const Contatos = () => {


  let [contatos, setContatos] = React.useState([]);
  const [excluir, setExcluir] = React.useState();

  useEffect(() => {

      axios.get('http://localhost:3000/contato/?_order=desc').then((response) => {
        setContatos(response.data);
        console.log(response.data);
      })
  //});
  },[]);
  return(
    <React.Fragment>
    <Link to="/contato/create" type="button" className="btn btn-primary">Cadastrar contato</Link>  
    <div>
      {contatos.map((contato) => (
        <Contato contato={contato} key={contato.id} atualizar={excluir}/>
      ))}
    </div>
    </React.Fragment>
  );
};

export default Contatos;
