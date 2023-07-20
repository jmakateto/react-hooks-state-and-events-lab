import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      {/* Your app content here */}
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;
