import React from 'react';

const useTimeout = (callback: () => void, delay: number) => {
 const savedCallbackRef = React.useRef(callback)

 React.useEffect(() => {
    savedCallbackRef.current = callback
 },[callback])


 React.useEffect(() => {
   const tick = () => savedCallbackRef.current();
  if (typeof delay !== 'number') return;
  const timer = setTimeout(tick, delay)
  return () => clearTimeout(timer)
 },[delay])

};

export {useTimeout};