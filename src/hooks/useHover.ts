import React from "react";

export function useHover(ref ):boolean  {
  const [isHovering, setIsHovering] = React.useState(false);

  const on = () => setIsHovering(true);
  const off = () => setIsHovering(false);

  React.useEffect(() => {
    if (!ref.current) {
      return;
    }
    const node = ref.current;

    node.addEventListener("mouseenter", on);
    node.addEventListener("mousemove", on);
    node.addEventListener("mouseleave", off);

    return function () {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener("mousemove", on);
      node.removeEventListener("mouseleave", off);
    };
  }, []);

  return isHovering;
}

// const Counter = () => {
//   const ref = React.createRef<HTMLInputElement>();
//   const hover = useHover(ref);

//   return <div ref={ref} style={{ width: 100, height: 100, background: hover ? 'blue' : "red" }}></div>;
// };