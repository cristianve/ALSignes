import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Face from '@material-ui/icons/Face';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



import * as lit from  '../literals.js'

//import { BrowserRouter as Router, NavLink, Redirect, Link } from 'react-router-dom';

const styles = theme => ({
 
    toolbarMain: {
        backgroundColor: `${theme.palette.grey[300]}`,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
      },
      toolbarTitle: {
        flex: 1,
      },
      button: {
        margin: theme.spacing.unit,
      },
      menuButton: {
        marginLeft: -12,
        marginRight: 20,
      },
      link: {
        textDecoration: 'none',

      },
      icon: {
        
        color: theme.palette.common.white,
      },
});

function AppBarUserMenu(props) {
  const { classes } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  

  return (
  
   
  
          <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Face className={classes.icon}/>
                {/**AccountCircle */}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >

              <MenuItem onClick={handleClose} component={Link} to="/dashboard">{lit.profile}</MenuItem>
              <MenuItem ><a href="api/logout" className={classes.link}>{lit.logout}</a></MenuItem>{/*onClick={handleLogOut } <a href="/logout">Logout</a>*/ }
              </Menu>
             
            </div>

        
     

   
   
  );
}



export default withStyles(styles)(AppBarUserMenu);