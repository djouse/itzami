import { useState, useEffect } from "react";
import upActivityLight from "../assets/goUpActivityLightTheme.png";
import upActivityDark from "../assets/goUpActivityDarkTheme.png";

export function BackToTop() {
  const [theme, setTheme] = useState(() => 
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(localStorage.getItem('theme') || 'light');
    };

    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const upActivity = theme === 'dark' ? upActivityDark : upActivityLight;

  return (
    <div className="up-onClick">
      <img src={upActivity} alt="Up on Click Activity" className="up-icon" />
    </div>
  );
}   