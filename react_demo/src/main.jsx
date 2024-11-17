import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MyComponent } from "./App.jsx";
import { FindAge } from "./FindAge.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyComponent />
    <FindAge />
  </StrictMode>
);
