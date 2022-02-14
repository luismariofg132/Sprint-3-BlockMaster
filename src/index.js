import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/config.css'
import './styles/navbar.css'
import './styles/peliculas.css'
import './styles/registro.css'
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

ReactDOM.render(
  <Provider store={store}>
    <AppRouters />
  </Provider>,
  document.getElementById('root')
);

