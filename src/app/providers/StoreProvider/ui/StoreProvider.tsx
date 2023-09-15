import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';

export interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<StateSchema>,
}

export const StoreProvider: FC<PropsWithChildren<StoreProviderProps>> = (props) => {
  const {
    initialState,
    children,
    asyncReducers,
  } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
