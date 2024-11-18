import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { NetFlix } from "./components/NetflixSeries";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NetFlix />
  </StrictMode>
);
