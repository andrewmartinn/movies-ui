import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo";

import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileNavbarProps {
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ toggleMobileMenu }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 4,
        background: "#161d2f",
        p: 1,
      }}
    >
      <Link to="/" style={{ marginTop: "5px" }}>
        <Logo width={130} height={34} fillColor="white" />
      </Link>
      <Button onClick={toggleMobileMenu}>
        <MenuIcon sx={{ fontSize: "30px" }} />
      </Button>
    </Box>
  );
};
export default MobileNavbar;
