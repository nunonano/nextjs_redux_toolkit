import React, { ReactChild } from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';
import IndexPage from 'pages/index';
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

describe('IndexPage', () => {
  const testProp = {
    test: 'test',
  };

  let TestIndexPageWrapper: ReactWrapper;

  beforeAll(async () => {
    await act(async () => {
      TestIndexPageWrapper = mountWithStore(<IndexPage {...testProp} />)();
    });
  });

  it('should render without throwing an error', () => {
    expect(TestIndexPageWrapper).toMatchSnapshot();
  });

  it('should render appProps correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(0).text()).toContain(
      JSON.stringify(testProp)
    );
  });

  it('should render page process env correctly', () => {
    expect(TestIndexPageWrapper.find('p').at(1).text()).toContain(
      process.env.NEXT_PUBLIC_TEST_PAGE_VAR
    );
  });
});
