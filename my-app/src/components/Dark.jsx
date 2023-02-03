import * as React from "react";
import "../Styles/style.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";

export default function Dark({theme, setTheme}) {
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button
      onClick={toggleTheme}
      variant="text"
      sx={{ border: 1, borderColor: "#dda15e", color: "#dda15e" }}
    >
      <LightModeIcon sx={{ color: "#edf6f9" }} />
    </Button>
  );
}
