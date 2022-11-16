import React, { useState } from "react";



 const useToggle = (prevState: number | string | boolean, nextState: number | string | boolean)  => {
  const [value, setValue] = useState<number | string | boolean>(prevState)

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