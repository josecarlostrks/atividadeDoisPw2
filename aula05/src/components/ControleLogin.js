import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import UiContainer from "./UiContainer";
import Login from "./Login";


const ControleLogin = () => {
  const {id} = useParams();

   return (
    <UiContainer>
      <Login />   
    </UiContainer>

  );
}

export default ControleLogin;