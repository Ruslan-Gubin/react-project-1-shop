import ReactDOM from "react-dom/client";
import  App  from "./components/App";
import { ROOT_ROOT } from "./constants/root";
import './style/index.scss';


const root = ReactDOM.createRoot(ROOT_ROOT as HTMLElement);
  
root.render(
            <App />
);