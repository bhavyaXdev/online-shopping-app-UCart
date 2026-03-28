import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import RoutingArea from "./Routes/RoutingArea.jsx";
import store from "./Utility/Store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RoutingArea />
  </Provider>,
);
