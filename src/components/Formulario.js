import React, { useState } from "react";
import PropTypes from 'prop-types';
import Error from "./Error";
import shortid from "shortid";

const Formulario = ({ guardarGasto, guardarCrearGasto }) => {
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState(0);
  const [error, actualizarError] = useState(false);

  //Cuando se agrega el gastoo
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad <= 0 || isNaN(cantidad) || nombre.trim() === "") {
      actualizarError(true);
      return;
    }
    actualizarError(false);
    //Construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    };
    //pasar el gasto a app
    guardarGasto(gasto);
    guardarCrearGasto(true)
    //resetear form
    guardarNombre("");
    guardarCantidad("");
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos Campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label>Nombre del Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad del Gasto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          onChange={(e) => guardarCantidad(parseInt(e.target.value, 10))}
          value={cantidad}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};
Formulario.propTypes={
  guardarGasto:PropTypes.func.isRequired,
  guardarCrearGasto:PropTypes.func.isRequired
}
export default Formulario;
