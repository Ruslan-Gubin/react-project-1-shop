import React from 'react';

const useInterval = (callback: () => void, delay: number) => {
 const savedCallbackRef = React.useRef(callback)

 React.useEffect(() => {
    savedCallbackRef.current = callback
 },[callback])


 React.useEffect(() => {
   const tick = () => savedCallbackRef.current();
  if (typeof delay !== 'number') return;
  const timer = setInterval(tick, delay)
  return () => clearInterval(timer)
 },[delay])

};

export {useInterval};