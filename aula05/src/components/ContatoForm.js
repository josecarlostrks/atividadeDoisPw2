import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useHistory } from 'react-router-dom';


  const valoresIniciais = {
    nome: '',
    telefone: '',
  }

const ContatoForm = ({ id }) => {

  let [contato, setContato] = useState(id ? null : valoresIniciais);
  const history = useHistory();
  console.log(contato);
  console.log(id);
  const token = localStorage.getItem('token');




  useEffect(() => {
    if(id){
      axios.get(`http://localhost:3000/contato/${id}`).then(
        (response)=>{
          console.log(response.data);
          setContato(response.data);
        })
    }
  },[id]);


  function onChange(evt){
    const { name, value } = evt.target;
    setContato({...contato, [name]: value});
  }
  function onSubmit(evt){
    evt.preventDefault();
    const config = {
      headers: {'Auth-Token': token }
    };

    const method = id ? 'put' : 'post';
    const url = id 
    ? `http://localhost:3000/contato/${id}` 
    : 'http://localhost:3000/contato'

    axios.[method](url, contato,
    config)
      .then((response) => {
        history.push('/');
      });

  }
  if(!contato){
    return <div>Carregando...</div>
  }

  return (
          <div>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="nome" className="col-form-label">Nome:</label>
                <input type="text" className="form-control" id="nome" name="nome"
                       onChange={onChange} value={contato.nome} />
              </div>
              <div className="mb-3">
                <label htmlFor="telefone" className="col-form-label">Telefone:</label>
                <input type="text" className="form-control" id="telefone" name="telefone"
                       onChange={onChange} value={contato.telefone} />
              </div>

          
          <div>

            <button type="submit" className="btn btn-primary">
              Criar Contato
            </button>
          </div>
          </form>          
        </div>
  );
}

export default ContatoForm;
