/**
 * useCustomHook - это хук который пишет сам разработчик для того чтобы инкапсилировать логику
 * который работает с состоянием в отдельный хук, делается для того чтобы переиспользовать
 * логику в других компонентах
 */

// import { useCallback, useEffect, useRef, useState } from "react";

// const useResize = (ref) => {
//   const [width, setWidth] = useState(0)
//   const [height, setHeight] = useState(0)
//   const [squareSize, setSquareSize] = useState(0)

//   const handlerResize = useCallback(() => {
//     setWidth(ref.current.offsetWidth)
//     setHeight(ref.current.offsetHeight)
//     setSquareSize(Math.min(ref.current.offsetWidth,ref.current.offsetHeight ))
//   },[ref])

//   useEffect(() => {
//     handlerResize()

//     window.addEventListener('resize', handlerResize)
//     return () => {
//       window.removeEventListener('resize',handlerResize)
//     }
//   }, [handlerResize])

//   return { width, height, squareSize,}
// }

// const useToggleHits = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { squareSize } = useResize(containerRef);

//   return (
//     <div className="root" ref={containerRef}>
//       <div
//         className="root-container"
//         style={{ width: `${squareSize}px`, height: `${squareSize}px` }}
//       ></div>
//     </div>
//   );
// };
