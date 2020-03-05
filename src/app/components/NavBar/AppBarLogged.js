import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import PropTypes from 'prop-types';


import AppBarUserMenu from './AppBarUserMenu';

import * as lit from  '../literals.js'


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const styles = theme => ({
 
  toolbarMain: {
      //backgroundImage: `url(${require('./background-blue.jpg')})`,
      backgroundColor: `${theme.palette.grey[300]}`,
      borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
      flex: 1,
      color: theme.palette.common.white,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    },
    toolbarName: {
     
      color: theme.palette.common.white,
  
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
    
});

class AppBarLogged extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "empty",
      isLoading: true,
      logo:"",
      backgroundImage:"",
    };
  }

  componentDidMount() {
    
    
    fetch('api/name')
      .then(response => response.json())
      .then(name => this.setState({ name: name.name }));

      fetch('/api/getImage?num=17')
    .then(response => response.json())
    .then(data => {

      this.setState({
        logo: data,
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

    fetch('/api/getImage?num=15')
    .then(response => response.json())
    .then(data => {

      this.setState({
        backgroundImage: data,
        isLoading: false,
      })
    })
    .catch(error => this.setState({ error, isLoading: false }));

  }


  render(){

    const { classes } = this.props;

    if (this.state.isLoading) {
      return (
  
        <React.Fragment>
        <CssBaseline />
        <main>
        <div className={classes.layout}>
        <Typography align="center">
  
        
        </Typography>
  
        </div>
        </main>
        </React.Fragment>
       
      )
      }else{
  
        const style = {
         backgroundImage:`url(data:image/png;base64,${this.state.backgroundImage.data})`,
        }
  
  
     
 
    return(
        <div>

          <Toolbar style={style}>
                    <Typography component= "h1" align="left" color="inherit" noWrap className="clasNameHere"></Typography>

                    <IconButton>
                  <Button size="small" href="/" >
                  <img src={`data:image/png;base64,${this.state.logo.data}`} width='150' height='150' />
                  
                  </Button>
                </IconButton>
                  
                    <Typography
                      component="h2"
                      variant="h2"
                      color="inherit"
                      align="center"
                      noWrap
                      className={classes.toolbarTitle}
                    >
                     {lit.nombreProy2} 
                    </Typography>
                    <Typography 
                    className={classes.toolbarName}
                    variant="title">
                    {lit.benv}, {this.state.name}! 
                    </Typography>
                    <div>
                        <AppBarUserMenu/>

                      </div>

                </Toolbar>


        </div>

    )
  }
}
}


AppBarLogged.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(AppBarLogged);