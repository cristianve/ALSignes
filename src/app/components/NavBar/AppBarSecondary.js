import React from 'react';

import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import * as lit from '../literals.js'
import { Typography } from '@material-ui/core';


const styles = theme => ({

  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  button: {

    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
  },
  paper: {

    width: 130,
    height: 50,
    marginTop: theme.spacing.unit * 1,
    //padding: theme.spacing.unit ,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  fab: {
    margin: theme.spacing.unit,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
});

function AppBarSecondary(props) {
  const { classes } = props;

  return (


    <div className={classes.layout}>
      <Toolbar variant="dense" className={classes.toolbarSecondary}>
        <div className={classes.root}>

          <Grid container spacing={24}>
            <Grid item sm>
              <Paper className={classes.paper}>
                <Button  component={Link} to="/aprenentatge" className={classes.button}>

                <Typography >
             
                {lit.apren}
            
                </Typography>
                  
                </Button>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper className={classes.paper}> 
                <Button fullWidth component={Link} to="/practica" className={classes.button}>
                {lit.pract}
                </Button>
              </Paper>
            </Grid>
            <Grid item sm>
              <Paper  className={classes.paper}> <Button component={Link} to="/buscador" className={classes.button}>
                {lit.busc}
              </Button></Paper>
            </Grid>
            <Grid item sm>
              <Paper className={classes.paper} ><Button  component={Link} to="/about" className={classes.button}>
                {lit.aboutTitle}
              </Button> </Paper>
            </Grid>
          </Grid>
        </div>


      </Toolbar>


    </div>
  );
}

AppBarSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarSecondary);