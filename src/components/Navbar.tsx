import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import UnilagLogo from "../../public/imgs/unilag-logo.png";
import MainLogo from "../../public/imgs/main-logo.png";
import { RiArrowDownSLine } from "react-icons/ri";

const pages = [
  { text: "About us", link: "/about-us" },
  { text: "Product & Services", link: "/products-services" },
  { text: "Resources", link: "/resources/downloads"},
  { text: "Contact Us", link: "/contact-us" },
  { text: "Sign Up", link: "/sign-up" },
];
const resources = [
  { text: "Events", link: "/events" },
  { text: "Downloads", link: "/resources/downloads" },
  { text: "FAQs", link: "/faqs" },
];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const router = useRouter();
  const isActiveRoute = (route: any) => router.pathname === route;

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="">
      <AppBar
        position="static"
        sx={{ backgroundColor: "white", fontSize: "6rem" }}
      >
        <Container
          maxWidth="xl"
          sx={{ paddingTop: ".5rem", paddingBottom: ".5rem" }}
        >
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src={MainLogo}
                alt="Staff coop Logo"
                className="w-[2.5rem] h-[2.5rem]"
              />
              <Image
                src={UnilagLogo}
                alt="Unilag Logo"
                className="w-[2.5rem] h-[2.5rem]"
              />
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },

                gap: "2rem",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={(e) => {
                    if (page.text == "Resources") {
                      handleOpenNavMenu(e);
                    } else {
                      handleCloseNavMenu();
                    }
                  }}
                  sx={{
                    my: 2,
                    color: `${isActiveRoute(page.link) ? "primary" : "black"}`,
                    display: "block",
                  }}
                >
                  <Link href={page.text === "Resources" ? "/" : page.link}>
                    <Typography variant="h6">
                      {page.text == "Resources" ? (
                        <p className="flex items-center gap-1">
                          {page.text}
                          <RiArrowDownSLine size={30} />
                        </p>
                      ) : (
                        <p>{page.text}</p>
                      )}
                    </Typography>
                  </Link>
                </Button>
              ))}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {resources.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                    <Link href={page.link}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Open menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <MenuSharpIcon />
                </IconButton>
              </Tooltip>
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
                {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseUserMenu}>
                    <Link href={page.link}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
