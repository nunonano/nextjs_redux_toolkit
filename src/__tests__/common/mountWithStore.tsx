import React, { ReactChild } from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import rootReducer from 'reducers';

const mountWithStore = (children: ReactChild) => (
  {
    reducer = rootReducer,
    devTools = false,
    middleware,
    preloadedState,
    enhancers,
  }: ConfigureStoreOptions = { reducer: rootReducer }
) => {
  const store = configureStore({
    reducer,
    devTools,
    middleware,
    preloadedState,
    enhancers,
  });
  return mount(<Provider store={store}>{children}</Provider>);
};

export default mountWithStore;
