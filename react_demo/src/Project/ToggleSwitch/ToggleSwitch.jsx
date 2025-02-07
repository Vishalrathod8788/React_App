import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleOnOff = () => {}
  return (
    <div className="toggle-container">
      <div className={`large-toggle-switch`} onClick={handleOnOff}>
        <div className={`switch-handle ${is}`}></div>
      </div>
      <p className="switch-label">{isOn ? "ON" : "OFF"}</p>
    </div>
  );
};
