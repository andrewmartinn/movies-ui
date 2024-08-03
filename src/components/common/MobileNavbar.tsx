import Logo from "../../assets/icons/logo";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface FullNavProps {
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC<FullNavProps> = ({ toggleMobileMenu }) => {
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
      <Logo width={130} height={34} fillColor="white" />
      <Button onClick={toggleMobileMenu}>
        <MenuIcon sx={{ fontSize: "30px" }} />
      </Button>
    </Box>
  );
};
export default MobileNavbar;
