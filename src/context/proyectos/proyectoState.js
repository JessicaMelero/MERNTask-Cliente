import React,{useReducer} from 'react';
// Context y reducer
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
// types
import {FORMULARIO_PROYECTO} from '../../types';

const ProyectoState = props => {
  const initialState = {
    formulario: false
  }

  // Dispatch para ejecutar las acciones
  const [ state, dispatch ] = useReducer(proyectoReducer, initialState);

  // Serie de funciones para el CRUD
  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO
    })
  }

  return(
    <proyectoContext.Provider
        value={{
          formulario: state.formulario,
          mostrarFormulario
        }}
      >
      {props.children}
    </proyectoContext.Provider>
  )
}

export default ProyectoState;