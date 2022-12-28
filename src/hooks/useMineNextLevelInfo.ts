import { MineType } from 'models/GameType';
import React from 'react';

const useMineNextLevelInfo = (mine: MineType , callback: (value: MineType| null) => void) => {
  const minesTargetRef = React.useRef<HTMLDivElement>(null)
  
  const on = () => {
    callback(mine)
  };
  const off = () => callback(null);

  React.useEffect(() => {
    if (!minesTargetRef.current) {
      return;
    }
    const node = minesTargetRef.current;

    node.addEventListener("mouseenter", on);
    node.addEventListener('mouseleave', off);

    return function () {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener('mouseleave', off);
    }
  },[mine])

  return {minesTargetRef}
};

export  {useMineNextLevelInfo};