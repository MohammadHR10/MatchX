import React, { useState } from 'react';
import './settings.css';  // Add this for styling later

const Settings = () => {
  const [notification, setNotification] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleNotificationToggle = () => {
    setNotification(!notification);
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <div className="settings-option">
        <label>Notifications</label>
        <button onClick={handleNotificationToggle}>
          {notification ? 'Disable' : 'Enable'}
        </button>
      </div>

      <div className="settings-option">
        <label>Theme</label>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="settings-summary">
        <p>Notifications: {notification ? 'Enabled' : 'Disabled'}</p>
        <p>Selected Theme: {theme}</p>
      </div>
    </div>
  );
};

export default Settings;
