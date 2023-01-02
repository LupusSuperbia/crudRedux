import {
  MOSTAR_ALERTA,
  OCULTAR_ALERTA
} from '../types'

// MUESTRA UNA ALERTA
export function mostrarAlerta(alerta) {
  return dispatch => {
    dispatch(crearAlerta(alerta))
  }
}

const crearAlerta = alerta => ({
  type: MOSTAR_ALERTA,
  payload : alerta
})

// ocultar alerta

export function ocultarAlertaAction() {
  return dispatch => {
    dispatch(ocultarAlerta())
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA
})