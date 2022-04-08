import { createRoot } from "react-dom/client";
// Hash router is required to deploy on gh-pages
import { HashRouter } from "react-router-dom";
import { IndexRouter } from "./routers";
import { Auth } from "./components";

import "./index.css";

const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Auth>
      <IndexRouter />
    </Auth>
  </HashRouter>
);
