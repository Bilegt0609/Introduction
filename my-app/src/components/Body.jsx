import { Box, height } from "@mui/system";
import * as React from "react";
import "../Styles/style.css";
import image1 from "../images/Bilegt.png";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";

export default function Body({theme, setTheme}) {
  return (
    <Box sx={{ width: "100%", height: "500vh" }}>
      <Container
        sx={{
          flexGrow: 1,
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        maxWidth="md"
      >
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <img src={image1} alt="Logo" className="image1" />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid gray",
            borderRadius: "10px",
            backgroundColor: theme =='light' ? '#e9ecef' : '#2b2d42'
          }}
        >
          Hello, I'm an indie app developer based in Japan!
        </Box>
      </Container>
    </Box>
  );
}
