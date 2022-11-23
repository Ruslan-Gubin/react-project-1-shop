import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { App } from "./App/App";

import { ROOT_ROOT } from "./constants/root";
import store, { persistor } from "./store/store";

const root = ReactDOM.createRoot(ROOT_ROOT as HTMLElement);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
