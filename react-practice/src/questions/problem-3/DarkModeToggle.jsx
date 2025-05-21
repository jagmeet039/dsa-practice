import React, { useEffect, useState } from 'react';
import './DarkModeToggle.css'

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className={`container ${isDark ? 'dark-mode' : 'light-mode'}`}>
      <h1>Dark Mode Toggle</h1>
      {isDark}
      <div className="toggle-container">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider round"></span>
        </label>
        <span className="mode-text">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
      </div>
    </div>
  );
}

export default DarkModeToggle;