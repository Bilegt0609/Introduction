import Header from "../components/Header";
import Body from "../components/Body";
import { Box } from "@mui/material";
import Work from "../components/Work";
import Bio from "../components/Bio";

const Home = ({theme, setTheme}) => {
  return (
    <Box className={theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <Body theme={theme} setTheme={setTheme}/>
    </Box>
  );
};
export default Home;
