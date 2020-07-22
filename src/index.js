import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './redux/reducer/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(cartReducer);
console.log(store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));