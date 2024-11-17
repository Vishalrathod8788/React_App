import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NetFlix4 } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <NetFlix />
    <NetFlix2 /> */}
    <NetFlix4 />
  </StrictMode>
);
