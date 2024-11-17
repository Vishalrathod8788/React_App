import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FindAge } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FindAge />
    <FindAge />
    <FindAge />
    <FindAge />
  </StrictMode>
);
