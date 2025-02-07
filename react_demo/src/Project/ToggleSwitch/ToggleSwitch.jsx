import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleOnOff = () => {
    setIsOn(!isOn);
  };
  return (
    <div className="toggle-switch">
      <div className={`switch ${isOn ? "on" : ""}`} onClick={toggleSwitch}>
        <span className="switch-state">{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};
