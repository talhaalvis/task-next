"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import * as homePage from "../../../public/assets/index";
import Image from "next/image";

const pages = ["Shop", "About us", "News", "Contacts", "FAQS"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const menu = [
  { text: "Live", img: homePage.live },
  { text: "Subscription", img: homePage.Star },
  { text: "Severs", img: homePage.Database },
  { text: "Download Launcher", img: homePage.FileArrowDown },
];

function Appheader() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      className="w-10/12 sm:w-9/12 lg:w-[73rem] lg:max-w-[49rem] xl:max-w-[73rem] border border-whiteLight bg-navBg rounded-2xl"
      sx={{
        top: { xs: "15px", lg: "0px", xl: "10px" },
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={homePage.logo} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box className="hidden xl:flex " sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Box
              className="hidden xl:flex"
              sx={{ display: "flex", gap: "10px" }}
            >
              <Box
                className="items-center  hidden xl:flex"
                sx={{ display: "flex", gap: "15px" }}
              >
                {menu.map((menuItem) => {
                  return (
                    <button className="flex gap-4 items-center border border-whiteLight">
                      <Image src={menuItem.img} /> <span>{menuItem.text}</span>
                    </button>
                  );
                })}
              </Box>
              <Button
                variant="contained"
                className="bg-[#B130FF]"
                startIcon={<Image src={homePage.UserCircle} />}
              >
                Send
              </Button>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Appheader;
