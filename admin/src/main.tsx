import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./App.css";
import LayoutRouter from "./Routes/Routes";
import "./index.css";
import store from "./redux/store";
import "react-tooltip/dist/react-tooltip.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <LayoutRouter />
  </Provider>
);
