import  { useState } from "react";

type IuseToggle = number | string | boolean

 const useToggle = (prevState: IuseToggle, nextState: IuseToggle):[IuseToggle, () => void]  => {
  const [value, setValue] = useState<number | string | boolean>(prevState)

  const toggle = () => {
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

export type {IuseToggle}