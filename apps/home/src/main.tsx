import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';

import { BrowserRouter } from 'react-router-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { DISHES_FEATURE_KEY, dishesReducer } from '@restaurant/dishes';

const store = configureStore({
  reducer: { [DISHES_FEATURE_KEY]: dishesReducer },
  // Additional middleware can be passed to this array
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
  // Optional Redux store enhancers
  enhancers: [],
});

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
