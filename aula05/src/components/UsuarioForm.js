import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useHistory } from 'react-router-dom';


const valoresIniciais ={
  id:'',
  username: '',
  email: '',
  password: '',
}


const UsuarioForm = () => {


  let [usuario, setUsuario] = useState(valoresIniciais);
  const history = useHistory();
  console.log(usuario);

  function onChange(evt){
    const { name, value } = evt.target;
    setUsuario({...usuario, [name]: value});
  }
  function onSubmit(evt){
    evt.preventDefault();
    console.log(usuario);
    axios.post('http://localhost:3000/user/register/',usuario)
      .then((response) => {
        history.push('/');
      });

  }

return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
        <label htmlFor="username" className="col-form-label">Nome:</label>
        <input type="text" className="form-control" id="username" name="username"
          onChange={onChange}  />
        </div>
        <div className="mb-3">
        <label htmlFor="email" className="col-form-label">Email:</label>
        <input type="text" className="form-control" id="email" name="email"
          onChange={onChange}  />
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="col-form-label">Senha:</label>
        <input type="password" className="form-control" id="password" name="password"
          onChange={onChange}  />
        </div>
          
        <div>
          <button type="submit" className="btn btn-primary">
          Cadastrar
          </button>
        </div>
      </form>
    </div>
    
  );
}

export default UsuarioForm;
