import React from "react";

// React.memo prevents re-render if props are same (shallow compare)
function ToggleButton({ label, isOn, onToggle }) {
  console.log("🔁 ToggleButton re-rendered");

  return (
    <div className="toggle-row">
      <div>
        <div className="toggle-label">{label}</div>
        <div className="toggle-subtitle">
          Current: <b>{isOn ? "ON ✅" : "OFF ❌"}</b>
        </div>
      </div>

      <button className={`toggle-btn ${isOn ? "on" : "off"}`} onClick={onToggle}>
        {isOn ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
}

export default React.memo(ToggleButton);
