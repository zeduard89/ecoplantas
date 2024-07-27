// rootReducer.js
import { combineReducers } from 'redux';
import catalogoReducer from './catalogoSlice';
import presupuestoReducer from './prosupuestoSlice';
// Importa otros reductores si tienes más

const rootReducer = combineReducers({
  catalogo: catalogoReducer,
  presupuesto: presupuestoReducer
  // Añade otros reductores aquí
});

export default rootReducer;