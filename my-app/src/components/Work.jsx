import { Box } from "@mui/system";
import * as React from "react";

export default function Work({ theme, setTheme }) {
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
      <Box sx={{ fontSize: "25px", textDecoration:"underline", }}>Work</Box>
      <Box>
        Takuya is a freelance and a full-stack developer based in Osaka with a
        passion for building digital services/stuff he wants. He has a knack for
        all things launching products, from planning and designing all the way
        to solving real-life problems with code. When not online, he loves
        hanging out with his camera. Currently, he is living off of his own
        product called Inkdrop. He publishes content for marketing his products
        and his YouTube channel called "Dev as Life" has more than 100k
        subscribers.
      </Box>
    </Box>
  );
}
