import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import ContatoForm from "./ContatoForm"
import UiContainer from "./UiContainer"


const ControleContato = () => {
  const { id } = useParams();

   return (
    <UiContainer>
      <ContatoForm id={id ? Number.parseInt(id, 10): null}/>     
    </UiContainer>
  );
}

export default ControleContato;
