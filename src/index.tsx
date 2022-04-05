import { createRoot } from "react-dom/client";

// Hash router is required to deploy on gh-pages
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);