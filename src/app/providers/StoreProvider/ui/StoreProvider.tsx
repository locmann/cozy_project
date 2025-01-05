import { Provider } from 'react-redux';
import { FC, PropsWithChildren } from 'react';
import { createReduxStore } from '../lib/store';
const store = createReduxStore();
export const StoreProvider: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
