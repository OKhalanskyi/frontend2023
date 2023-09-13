import { FC } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  className?: string;
  element?: HTMLElement;
}
export const Portal: FC<PortalProps> = (props) => {
  const {
    element = document.body,
    children,
  } = props;

  return createPortal(children, element);
};
