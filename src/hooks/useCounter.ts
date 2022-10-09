import React, { useCallback,  useState } from "react"


const useCounter = (initialValue) => {
  const [counter, setCounter] = useState(initialValue)

  const incriment = useCallback(() => {
     setCounter(counter + 1)
  },[counter])

  const decrement = useCallback(() => {
    setCounter(counter - 1)
  },[counter])
  
  return [counter,incriment,decrement]
};

export {useCounter}