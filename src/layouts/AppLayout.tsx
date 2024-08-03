import {
  Box,
  CssBaseline,
  Theme,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/Sidebar";
import MobileNavbar from "../components/common/MobileNavbar";

const sidebarWidth = 250;

const AppLayout: React.FC = () => {
  const theme = useTheme<Theme>();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <Box
      sx={{
        display: "flex",
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
      <Sidebar
        sidebarWidth={sidebarWidth}
        isMobile={isMobile}
        mobileMenu={mobileMenu}
        toggleMobileMenu={toggleMobileMenu}
      />
      <Box sx={{ flexGrow: 1, width: `calc(100% - ${sidebarWidth}px)` }}>
        {isMobile && !mobileMenu && (
          <MobileNavbar toggleMobileMenu={toggleMobileMenu} />
        )}
        <Outlet />
      </Box>
    </Box>
  );
};
export default AppLayout;
