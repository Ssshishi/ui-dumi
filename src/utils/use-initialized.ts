import { useRef } from 'react';

export function useInitialized(checked?: boolean) {
  const initializedRef = useRef(checked);
  if (checked) {
    initializedRef.current = true;
  }
  return !!initializedRef.current;
}
