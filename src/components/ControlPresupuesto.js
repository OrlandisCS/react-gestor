import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import {revisarPresupuesto} from '../helpers';
const controlPresuppuesto = ({presupuesto,restante}) => {
    return (  
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: {presupuesto} €
            </div>
            
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: {restante} €
            </div>

        </Fragment>

    );
}
controlPresuppuesto.propTypes={
    presupuesto:PropTypes.number.isRequired,
    restante:PropTypes.number.isRequired
  }
export default controlPresuppuesto;