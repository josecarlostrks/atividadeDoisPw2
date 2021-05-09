import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Lista from './Lista';
import Usuario from  "../components/Usuario";
import ControleContato from "../components/ControleContato";
import Login from "../components/Login";
import ControleLogin from "../components/ControleLogin";



const Root = () => {

	return(

		<Router>
			<Switch>
				<Route path="/create" component={Usuario} />
				<Route path="/login" component={ControleLogin} />
				<Route path="/contato/create" component={ControleContato} />
				<Route path="/contato/edit/:id" component={ControleContato} />
				<Route path="/" component={Lista} />
			</Switch>
		</Router>
	);
};

export default Root;