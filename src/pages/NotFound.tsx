import { Box, Button, CssBaseline, Typography } from "@mui/material";
import Logo from "../assets/icons/logo";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        background: "#10141F",
        minHeight: "100vh",
        color: "#FFF",
        gap: {
          xs: 0,
          sm: 2,
        },
      }}
    >
      <CssBaseline />
      <Box sx={{ p: 4 }}>
        <Logo width={135} height={34} fillColor="white" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          alignItems: "center",
          justifyContent: "center",
          minHeight: "50vh",
        }}
      >
        <Typography component="h2" variant="h2">
          404 Page Not Found
        </Typography>
        <Typography>The page you are looking for does not exist!</Typography>
        <Button variant="contained">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            Go Back Home
          </Link>
        </Button>
      </Box>
    </Box>
  );
};
export default NotFound;
