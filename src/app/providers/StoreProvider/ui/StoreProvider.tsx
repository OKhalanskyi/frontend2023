import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = (props) => {
  const {
    initialState,
    children,
  } = props;

  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
