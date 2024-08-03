import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/logo";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import BookmarksIcon from "@mui/icons-material/Bookmarks";

interface SidebarProps {
  sidebarWidth?: number;
  sidebarBgColor?: string;
  mobileMenu: boolean;
  isMobile: boolean;
  toggleMobileMenu: () => void;
}

interface SidebarContentProps {
  isMobile: boolean;
  toggleMobileMenu: () => void;
}

interface SidebarLink {
  id: number;
  name: string;
  href: string;
  icon: JSX.Element;
}

const SidebarLinks: SidebarLink[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
    icon: <AppsIcon />,
  },
  {
    id: 2,
    name: "Movies",
    href: "/movies",
    icon: <MovieIcon />,
  },
  {
    id: 3,
    name: "TV Shows",
    href: "/tv-shows",
    icon: <LiveTvIcon />,
  },
  {
    id: 4,
    name: "Bookmarks",
    href: "/bookmarks",
    icon: <BookmarksIcon />,
  },
];

const Sidebar: React.FC<SidebarProps> = ({
  sidebarWidth = 250,
  sidebarBgColor = "#161d2f",
  mobileMenu,
  isMobile,
  toggleMobileMenu,
}) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: sidebarWidth }, background: sidebarBgColor }}
    >
      {isMobile ? (
        <Drawer
          variant="temporary"
          open={mobileMenu}
          onClose={toggleMobileMenu}
          sx={{
            display: {
              xs: "block",
              sm: "none",
            },
            "& .MuiDrawer-paper": {
              width: sidebarWidth,
              background: sidebarBgColor,
              color: "white",
              boxSizing: "border-box",
            },
          }}
        >
          <SidebarContent
            isMobile={isMobile}
            toggleMobileMenu={toggleMobileMenu}
          />
        </Drawer>
      ) : (
        <Drawer
          variant="permanent"
          open
          sx={{
            display: {
              xs: "none",
              sm: "block",
            },
            "& .MuiDrawer-paper": {
              width: sidebarWidth,
              background: sidebarBgColor,
              color: "white",
              boxSizing: "border-box",
            },
          }}
        >
          <SidebarContent
            isMobile={isMobile}
            toggleMobileMenu={toggleMobileMenu}
          />
        </Drawer>
      )}
    </Box>
  );
};

const SidebarContent: React.FC<SidebarContentProps> = ({
  isMobile,
  toggleMobileMenu,
}) => {
  const { pathname } = useLocation();

  return (
    <Box>
      {!isMobile && (
        <Box sx={{ p: 4 }}>
          <Logo width={135} height={34} fillColor="white" />
        </Box>
      )}
      <List sx={{ pt: 5 }}>
        {SidebarLinks.map((item) => (
          <ListItem key={item.id}>
            <ListItemButton
              onClick={toggleMobileMenu}
              component={Link}
              to={item.href}
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <ListItemIcon
                sx={{ color: pathname === item.href ? "#a259cd" : "white" }}
              >
                <Box
                  sx={{
                    p: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#2e3c5f",
                    borderRadius: 2,
                  }}
                >
                  {item.icon}
                </Box>
              </ListItemIcon>
              <ListItemText
                sx={{
                  "&:hover": {
                    color: "#ccc",
                  },
                }}
              >
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
