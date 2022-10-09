import React, { useCallback, useRef, useState } from 'react';

const CoordinatesMouse = React.memo((props) => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const ref = useRef()

    const mouseMoveHandler = useCallback(
     (e) => {
        const rect = ref.current.getBoundingClientRect()
        setX(e.clientX - rect.left)
        setY(e.clientY - rect.top)
    },
    [setX,setY.ref]
    )

    return (
        <div ref={ref} onMouseMove={mouseMoveHandler}>
            {props.render({x,y})}
            
        </div>
    );
});

export default CoordinatesMouse;

{/* <CoordinatesMouse render={(data) => <p>{data.x}:{data.y}</p>}/> */}