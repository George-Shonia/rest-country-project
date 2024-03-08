import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={
        darkMode
          ? { backgroundColor: "hsl(207, 26%, 17%)" }
          : { backgroundColor: "hsl(0, 0%, 98%)" }
      }
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                onDarkModeClick={() => setDarkMode(!darkMode)}
              />
            }
          />
          <Route
            path="/country/:name"
            element={
              <Country
                darkMode={darkMode}
                onDarkModeClick={() => setDarkMode(!darkMode)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
