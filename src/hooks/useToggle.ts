import React, { useState } from "react";

interface IuseToggle {
  prevState:  number
  nextState:  number
}


 const useToggle = (prevState: number | string, nextState: number | string)  => {
  const [value, setValue] = useState(prevState)

  const toggle:React.MouseEventHandler<HTMLImageElement> = () => {
    const prev = prevState
    if (value == prev) {
      setValue(nextState)
    } else {
      setValue(prev)
    }
  }

  return [value, toggle]
}

export {useToggle}