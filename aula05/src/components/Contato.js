import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


//onClick={()=>props.excluirContato(props.posicao)}
function Contato({ contato }) {
const history = useHistory();
/*

data-target="#editModal"
*/

  const token = localStorage.getItem('token');
  

  function excluirContato(evt){
  const config = {
    headers: { Auth-Token : token}
};
console.log(token);
    evt.preventDefault();
    axios.delete(`http://localhost:3000/contato/${contato.id}`,
    )
    .then((response) => {
        history.push('/');
      });



  }

  return (
    <div className="card shadow-sm bg-white rounded contato">
      <div className="card-body">
        <h3 className="card-title contato-titulo">{contato.nome}</h3>
        <h4 className="card-title">{contato.telefone}</h4>

        <button type="button" className="btn btn-danger btn-sm"
           onClick={excluirContato} >
          Excluir
        </button>

        <Link to={`/contato/edit/${contato.id}`} className="btn btn-primary btn-sm"> Editar</Link>
      </div>        
    </div>
  );

};

export default Contato;
