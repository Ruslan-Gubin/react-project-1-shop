import axios from "axios";
import * as hook from "../../../hooks";


const Test = () => {
  const [todos, loading, error] = hook.useRequest(fetchTodos)
  const [isVisible, toggleVisible] = hook.useToggle(true)
  

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  }
  
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1> It is Error...</h1>
  }
  
  return (
  <div>
    <button onClick={toggleVisible}>toggleVisible</button>
    {isVisible && <button className="custom-button">Test Button</button>}
    
    <ul>

   {todos && todos.map(todo => 
    <li key={todo.id} >{todo.id} {todo.title}</li>
    )}
    </ul>
  </div>
  );
};

export default Test;
