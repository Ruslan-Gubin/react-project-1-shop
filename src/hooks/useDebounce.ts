import { useCallback, useRef } from "react";

export  function useDebounce(callback, delay) {
  const timer = useRef();

  const debouncedCallback = useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debouncedCallback;
}

// const Test = () => {
//   const [value, setValue] = useState()
//   const debouncedSearch = useDebounce(search, 500)

// function search(query) {
//   try {
//     fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
//       .then((response) => response.json())
//       .then((todos) => console.log(todos));
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// const onChange = e => {
//   setValue(e.target.value)
//   debouncedSearch(e.target.value)
// }

// return (
// <div>
//   <input type="text" value={value} onChange={onChange}/>
// </div>
// );
// };