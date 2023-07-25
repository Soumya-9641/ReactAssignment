//import React from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component={RouterLink} to="/" color="inherit" noWrap>
          My Website
        </Typography>
        <Box ml="auto">
          <Button color="inherit" component={NavLink} to="/" activeClassName="activeLink" exact>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/renderdata" activeClassName="activeLink">
          renderdata
          </Button>
         
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;