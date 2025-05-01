import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./context/Provider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <App />
  </Provider>
);
