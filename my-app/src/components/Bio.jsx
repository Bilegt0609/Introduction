import { Box } from "@mui/system";
import * as React from "react";

export default function Bio({ theme, setTheme }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "220px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ fontSize: "25px", textDecoration: "underline" }}>Bio</Box>
      <Box sx={{width:"100%"}}>
        <Box sx={{ display: "flex", width:"100%", gap:"20px" }}>
          <Box sx={{fontSize:"20px"}}>1984</Box>
          <Box sx={{display:"flex", alignItems:"center"}}>Born in Osaka (大阪), Japan.</Box>
        </Box>
        <Box sx={{ display: "flex", width:"100%", gap:"20px" }}>
          <Box sx={{fontSize:"20px"}}>2010</Box>
          <Box sx={{display:"flex", alignItems:"center"}}>
            Completed the Master's Program in the Graduate School of Information
            Science at Nara Institute of Science and Technology
            (奈良先端科学技術大学院大学情報科学研究科修士課程)
          </Box>
        </Box>
        <Box sx={{ display: "flex", width:"100%", gap:"20px" }}>
          <Box sx={{fontSize:"20px"}}>2010</Box>
          <Box sx={{display:"flex", alignItems:"center"}}>Worked at Yahoo! Japan (ヤフー株式会社入社)</Box>
        </Box>
        <Box sx={{ display: "flex", width:"100%", gap:"20px" }}>
          <Box sx={{fontSize:"20px"}}>2012 to present</Box>
          <Box sx={{display:"flex", alignItems:"center"}}>Working as a freelancer</Box>
        </Box>
      </Box>
    </Box>
  );
}
