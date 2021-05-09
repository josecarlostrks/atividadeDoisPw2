import React, {useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useHistory } from 'react-router-dom';


const valoresIniciais ={
  email: '',
  password: '',
}


const Login = () => {


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
    axios.post('http://localhost:3000/user/login/',usuario)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
        history.push('/');
      });

  }

return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="col-form-label">Email:</label>
        <input type="text" className="form-control" id="email" name="email"
          onChange={onChange} value={usuario.email} />
        </div>
        <div className="mb-3">
        <label htmlFor="password" className="col-form-label">Senha:</label>
        <input type="password" className="form-control" id="password" name="password"
          onChange={onChange} value={usuario.password} />
        </div>
          
        <div>
          <button type="submit" className="btn btn-primary">
          Logar
          </button>
        </div>
      </form>
    </div>
    
  );
}

export default Login;
