import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";



import { ROOT_ROOT } from "./constants/root";
import { store } from "./store/store";



const root = ReactDOM.createRoot(ROOT_ROOT as HTMLElement);
  
root.render(
    <Provider store={store}>
    <BrowserRouter>
       <App/>
    </BrowserRouter>
     </Provider>
);