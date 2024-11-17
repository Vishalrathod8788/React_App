import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NetFlix5 } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NetFlix5 />
  </StrictMode>
);
