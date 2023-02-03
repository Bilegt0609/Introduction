import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} setTheme={setTheme}/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;