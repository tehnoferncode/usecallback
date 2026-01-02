import React, { useCallback, useState } from "react";
import ToggleButton from "./ToggleButton";
import "./Notification.css";

function NotificationSettings() {
  const [notificationsOn, setNotificationsOn] = useState(true);
  const [counter, setCounter] = useState(0);

  /*
    ✅ useCallback memoizes the function reference.
    This means ToggleButton won’t re-render just because parent re-rendered,
    as long as dependencies do not change.
  */
  const handleToggle = useCallback(() => {
    setNotificationsOn((prev) => !prev);
  }, []); // no dependency needed because we use prev

  return (
    <div className="settings-card">
      <h2 className="title">⚙️ Settings: Notifications</h2>
      <p className="subtitle">
        Real-world example: parent updates often, but child should not re-render
        unnecessarily.
      </p>

      <div className="panel">
        <ToggleButton
          label="App Notifications"
          isOn={notificationsOn}
          onToggle={handleToggle}
        />
      </div>

      <div className="counter-box">
        <div>
          <div className="counter-title">Dashboard Updates (Simulated)</div>
          <div className="counter-value">{counter}</div>
        </div>

        <button className="btn" onClick={() => setCounter((c) => c + 1)}>
          Update Counter
        </button>
      </div>

      <div className="note">
        ✅ Click <b>Update Counter</b> many times.  
        With <b>useCallback</b> + <b>React.memo</b>, ToggleButton will not re-render
        unnecessarily (check console).
      </div>
    </div>
  );
}

export default NotificationSettings;
