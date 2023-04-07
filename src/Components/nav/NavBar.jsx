import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Stack,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
} from "@mui/material";
import reho from "../../assets/images/reho.jpg";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { NavLink } from "react-router-dom";

let activeStyle = {
  textDecoration: "none",
  color: "#8aa4fc",
};

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0",
});
const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <div>
      <AppBar position="fixed" className="gradient__bg">
        <StyledToolbar>
          <Box
            className="gpt3__navbar-logo"
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <NavLink to="/">
              <img src={reho} alt="reho logo" className="gpt3__navbar-image" />
            </NavLink>
            <p>
              <span className="gpt3__navbar-text">R</span>ehoboth Living Faith
              Mission
            </p>
          </Box>

          <Stack
            direction="row"
            gap={3}
            sx={{ display: { xs: "none", sm: "flex" } }}
            className="gpt3__navbar-stack"
          >
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">HOME</span>
            </NavLink>
            <NavLink
              to="/who"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">WHO WE ARE</span>
            </NavLink>
            <NavLink
              to="/what"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">WHAT WE DO</span>
            </NavLink>

            <NavLink
              to="/units"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">CHURCH UNITS</span>
            </NavLink>

            <NavLink
              to="/programs"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">PROGRAMS</span>
            </NavLink>

            <NavLink
              to="/teachings"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">TEACHINGS</span>
            </NavLink>
            <NavLink
              to="/admin"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <span className="gpt3__navbar-a">LOGIN AS ADMIN</span>
            </NavLink>
          </Stack>
          <Tooltip title="Account settings">
            <MenuIcon
              onClick={handleClick}
              size="small"
              sx={{
                display: { xs: "block", sm: "none" },
                margin: "0px 10px",
                color: "#8aa4fc",
              }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            ></MenuIcon>
          </Tooltip>

          <Menu
            className="scale-up-center"
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                width: "100%",
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">HOME</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />
            <MenuItem>
              <NavLink
                to="/who"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">WHO WE ARE</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />
            <MenuItem>
              <NavLink
                to="/what"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">WHAT WE DO</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />

            <MenuItem>
              <NavLink
                to="/units"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">CHURCH UNITS</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />

            <MenuItem>
              <NavLink
                to="/programs"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">PROGRAMS</span>
              </NavLink>
              <NavLink
                to="/teachings"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">TEACHINGS</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />

            <MenuItem>
              <NavLink
                to="/admin"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span className="gpt3__navbar-a">LOGIN AS ADMIN</span>
              </NavLink>
            </MenuItem>
            <Divider color="#8aa4fc" />
          </Menu>
        </StyledToolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
