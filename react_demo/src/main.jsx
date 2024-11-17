import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NetFlix, NetFlix2, NetFlix3 } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NetFlix />
    <NetFlix2 />
    <NetFlix3 />
  </StrictMode>
);
