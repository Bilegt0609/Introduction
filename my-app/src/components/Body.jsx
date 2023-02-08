import { Box, height } from "@mui/system";
import * as React from "react";
import "../Styles/style.css";
import image1 from "../images/SomeDudeDom.png";
import Container from "@mui/material/Container";
import Work from "./Work";
import Bio from "./Bio";
import Banner from "./Banner";

export default function Body({ theme, setTheme, props }) {

  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <Container
        sx={{
          flexGrow: 1,
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
        maxWidth="sm"
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
          <Banner />
         
         
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
            backgroundColor: theme == "light" ? "#e9ecef" : "#2b2d42",
          }}
        >
          Hello, I'm an software developer based in Mongolia!
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "150px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "70%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "50%",
                fontSize: "35px",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              Bilegt
            </Box>
            <Box sx={{ width: "100%", height: "50%" }}>
              Digital Craftsman ( Gamer / Developer / Designer )
            </Box>
          </Box>
          <Box
            sx={{
              width: "30%",
              height: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              draggable="false"
              src={image1}
              alt="Logo"
              className="image1"
              style={{
                border: "4px solid gray",
                borderRadius: "500px",
                height: "100px",
              }}
            />{" "}
          </Box>
        </Box>

        <Work />

        <Bio />
        
      </Container>
    </Box>
  );
}
