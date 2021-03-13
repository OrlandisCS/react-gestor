import React, { Fragment, useState } from "react";
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {
  //Definir State de cantidad
  const [cantidad, guardarCantidad] = useState(0);
  const [error, actualizarError] = useState(false);

  //Funcion que lee el presupuesto
  const definirPresupuesto = e => {
    guardarCantidad(parseInt(e.target.value, 10));
  };
  //Submit para definir el presupuesto
  const agregarPresupuesto = e => {
    e.preventDefault();
    //Validar
    if(cantidad <= 0 || isNaN(cantidad)){
        actualizarError(true);
        return;
    }
    //Despues de validar
    actualizarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad); 
    actualizarPregunta(false);
  };
  return (
    <Fragment>
      <h2>Coloque Su Presupuesto Inicial</h2>
      {error ? <Error mensaje="El Presupuesto es incorrecto" /> : null}

      <form onSubmit={agregarPresupuesto}>
          <h3>{error}</h3>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};
Pregunta.propTypes={
  guardarPresupuesto:PropTypes.func.isRequired,
  guardarRestante:PropTypes.func.isRequired,
  actualizarPregunta:PropTypes.func.isRequired
}
export default Pregunta;
