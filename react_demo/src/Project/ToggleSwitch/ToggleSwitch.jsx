import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div className="toggle-container">
      <div className={`large-toggle-switch`}>
        <div className="switch-handle"></div>
      </div>
      <p className="switch-label"></p>
    </div>
  );
};
