import React, { ReactElement } from 'react';
import { useInitialized } from './use-initialized';

interface Props {
  active: boolean;
  forceRender?: boolean;
  destroyOnClose?: boolean;
  children: ReactElement;
}

export const ShouldRender: React.FC<Props> = (props) => {
  const shouldRender = useShouldRender(props.active, props.destroyOnClose, props.forceRender);
  return shouldRender ? props.children : null;
};

export function useShouldRender(active: boolean, forceRender?: boolean, destroyOnClose?: boolean) {
  const initialized = useInitialized(active);
  if (forceRender) return true;
  if (active) return true;
  if (!initialized) return false;
  return !destroyOnClose;
}
