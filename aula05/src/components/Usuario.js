import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import UsuarioForm from "./UsuarioForm";
import UiContainer from "./UiContainer";


const Usuario = () => {
  const {id} = useParams();

   return (
    <UiContainer>
      <UsuarioForm />   
    </UiContainer>

  );
}

export default Usuario;
