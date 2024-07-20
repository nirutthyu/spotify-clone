
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataLayer } from "./Datalayer";
import reducer, { initialState } from "./reducer";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <DataLayer initialState={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </div>
);
