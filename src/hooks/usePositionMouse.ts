import React from "react";

const usePositionMouse = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  const mouseMoveHandler = 
    (e:React.MouseEvent<HTMLDivElement>) => {    
        const rect = ref.current &&  ref.current.getBoundingClientRect();   
        rect &&  setX(e.clientX - rect.left);
        rect &&  setY(e.clientY - rect.top);
    }

  return [ref, mouseMoveHandler, x, y]
};

export {usePositionMouse};


// return (
//     <div ref={ref} onMouseMove={mouseMoveHandler}>
//       {props.render({ x, y })}
//     </div>
//   );



{
  /* <CoordinatesMouse render={(data) => <p>{data.x}:{data.y}</p>}/> */
}
