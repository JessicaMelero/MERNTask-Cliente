import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA
} from '../../types';

const TareaState = props => {
  const initialState = {
    tareas: [
      {id: 1, nombre:"Elegir plataforma", estado: true, proyectoId: 1},
      {id: 2, nombre:"Elegir colores", estado: false,  proyectoId: 2},
      {id: 3, nombre:"Elegir hosting", estado: false,  proyectoId: 3},
      {id: 4, nombre:"Elegir plataformas de pago", estado: true,  proyectoId: 4},
      {id: 5, nombre:"Elegir plataforma", estado: true, proyectoId: 1},
      {id: 6, nombre:"Elegir colores", estado: false,  proyectoId: 2},
      {id: 7, nombre:"Elegir hosting", estado: false,  proyectoId: 3},
      {id: 8, nombre:"Elegir plataforma", estado: true, proyectoId: 3},
      {id: 9, nombre:"Elegir colores", estado: false,  proyectoId: 1},
      {id: 10, nombre:"Elegir hosting", estado: false,  proyectoId: 2},
      {id: 11, nombre:"Elegir plataforma", estado: true, proyectoId: 2},
      {id: 12, nombre:"Elegir colores", estado: false,  proyectoId: 3},
      {id: 13, nombre:"Elegir hosting", estado: false,  proyectoId: 1},
    ],
    tareasproyecto: null,
    errortarea: false,
    tareaseleccionada: null
  }
  // Crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // Obtener las funciones

  // Obtener las tareas de un proyecto
  const obtenerTareas = proyectoId => {
    dispatch({
      type:TAREAS_PROYECTO,
      payload: proyectoId
    })
  }

  // Agregar tarea al proyecto seleccionado
  const agregarTarea = tarea => {
    console.log(tarea)
    dispatch({
      type:AGREGAR_TAREA,
      payload: tarea
    })
  }

  // Valida y muestra un error si es necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA
    })
  }

  // Eliminar tarea por id
  const eliminarTarea = id => {
    dispatch({
      type:ELIMINAR_TAREA,
      payload: id
    })
  }

  // Cambia el estado de cada tarea
  const cambiarEstadoTarea = tarea => {
    dispatch({
      type:ESTADO_TAREA,
      payload: tarea
    })
  }

  // Extrae una tarea para editarla
  const guardarTareaActual = tarea => {
    dispatch({
      type:TAREA_ACTUAL,
      payload: tarea
    })
  }

  // Modifica una tarea
  const actualizarTarea = tarea => {
    dispatch({
      type:ACTUALIZAR_TAREA,
      payload: tarea
    })
  }

  return(
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea
      }}
    >
      {props.children}
    </TareaContext.Provider>
  )

}

export default TareaState;
