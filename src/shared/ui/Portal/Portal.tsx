import { createPortal } from 'react-dom';
import { FC, ReactNode } from 'react';

interface IPortal {
  children: ReactNode;
  domNode: Element | DocumentFragment;
}

export const Portal: FC<IPortal> = ({ children, domNode }) => {
  return createPortal(children, domNode);
};
