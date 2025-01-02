import { Provider } from 'react-redux';
import { FC, PropsWithChildren } from 'react';
import { createReduxStore } from '../lib/store';

export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = createReduxStore();

  return <Provider store={store}>{children}</Provider>;
};
