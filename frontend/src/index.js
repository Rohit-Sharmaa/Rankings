import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Loader from "./components/Loder/Loader";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback={<Loader />}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Suspense>
);
