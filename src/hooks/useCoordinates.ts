import React from "react";


const useCoordinates = (): [React.RefObject<HTMLDivElement>,number ,number ] => {
  const myRef = React.useRef<HTMLDivElement>(null)
  const [x, setX] = React.useState<number>(0);
  const [y,setY] = React.useState<number>(0)

  const getPosition = () => {
    if (myRef.current) {
      const x = myRef.current.offsetLeft;
        setX(x);
    }

    if (myRef.current) {
      const y = myRef.current?.offsetTop;
      setY(y);
    }
  };

  React.useEffect(() => {
    getPosition();
  }, [myRef.current?.offsetTop]);  

  React.useEffect(() => {
    window.addEventListener("resize", getPosition); 
  }, []);

  return [myRef, x, y]

}

export {useCoordinates}


// const [myRef, x, y] = useCoordinates();

//  function any() {
//   window.scrollTo(x,y)
// }

// return (
//     <div ref={myRef}></div>
// )