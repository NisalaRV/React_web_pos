import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {NavLink} from "react-router-dom";

// const pages = ['Home', 'Customer', 'item','place order','order details'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const activeLink = "border-b-2 cursor-pointer";
const normalLink = "cursor-pointer";

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <NavLink
                                to={"/home"}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                                    Home
                                </Typography>
                            </NavLink>

                            <NavLink
                                to={"/customer"}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                                    Customer
                                </Typography>
                            </NavLink>

                            <NavLink
                                to={"/item"}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                                    Item
                                </Typography>
                            </NavLink>

                            <NavLink
                                to={"/place"}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                                    Place Order
                                </Typography>
                            </NavLink>

                            <NavLink
                                to={"/orderDetail"}
                                className={({ isActive }) => (isActive ? activeLink : normalLink)}
                            >
                                <Typography textAlign="center" pt={1} pr={2} pl={2}>
                                    Order Details
                                </Typography>

                            </NavLink>
                        </Menu>
                    </Box>


                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <NavLink
                            to={"/home"}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <h4>Home</h4>
                            </Button>
                        </NavLink>

                        <NavLink
                            to={"/customer"}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <h4>Customer</h4>
                            </Button>
                        </NavLink>

                        <NavLink
                            to={"/item"}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <h4>Item</h4>
                            </Button>
                        </NavLink>

                        <NavLink
                            to={"/place"}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <h4>Place Order</h4>
                            </Button>
                        </NavLink>

                        <NavLink
                            to={"/orderDetail"}
                            className={({ isActive }) => (isActive ? activeLink : normalLink)}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                <h4>Order Details</h4>
                            </Button>
                        </NavLink>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
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
export default Header;


