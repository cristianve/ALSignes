import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import classNames from 'classnames';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import * as lit from '../literals.js'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    padding: theme.spacing.unit * 2,

  },
  paper: {
    padding: theme.spacing.unit * 5,
    margin: 'auto',
    maxWidth: 500,

  },
  paper2: {
    padding: theme.spacing.unit * 5,
    margin: 'auto',
    maxWidth: 500,


  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
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


class DashBoardUserTest extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "empty",
      image1:"",
      image2:"",
      isLoading: true,
    };
  }

  componentDidMount() {

    fetch('api/name')
      .then(response => response.json())
      .then(name => this.setState({ name: name.name }));


      fetch('api/getImage?num=13')
      .then(response => response.json())
      .then(name => this.setState({ image1: name.data }));

      fetch('api/getImage?num=14')
      .then(response => response.json())
      .then(name => this.setState({ 
        image2: name.data,
        isLoading: false, 
      }));
  

  }


  render() {

    const { classes } = this.props;


    if (this.state.isLoading) {
    return (

      <React.Fragment>
      <CssBaseline />
      <main>
      <div className={classes.layout}>
      <Typography align="center">

      <CircularProgress  className={classes.progress} />
      </Typography>

      </div>
      </main>
      </React.Fragment>
     
    )
    }
    else{

      return(
        <div className={classes.root}>
        <Typography component="h1" align="left" color="inherit" noWrap className="clasNameHere">
          <div>
            <br />
            <h1 align="center">{lit.benv}  {this.state.name}!</h1>
            <br />
          </div>
        </Typography>
        <Paper className={classes.paper}>
          <Grid container spacing={16} >
            <Grid item>
              <ButtonBase className={classes.image}>
                {/*
                
                  <img src={`data:image/png;base64,${this.state.img.data[index]}`} width='50' height='50' />
                <img alt="Lecciones" src="/static/images/libro.png" width="100" height="100" />
                */}
              
                <img src={`data:image/png;base64,${this.state.image1}`} width='100' height='100' />
              
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {lit.llicoyou}
                  </Typography>
                  <Typography gutterBottom>{lit.llicoact} X</Typography>
                  <Typography color="textSecondary">{lit.lliconext} Y</Typography>
                </Grid>
                <Grid item>
                  <Button fullWidth variant="contained" color="primary" component={Link} to={`/llico/1` /*`/leccion/${post.num}`*/}>
                    {lit.llicogo}
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">X%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
        <br />
        <Paper className={classes.paper2}>
          <Grid container spacing={16}>
            <Grid item>
              <ButtonBase className={classes.image}>
                {/** <img className={classes.img} alt="foto progreso" src="/path/foto/lecciones/progreso.jpg" /> */}
                <img src={`data:image/png;base64,${this.state.image2}`} width='100' height='100' />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1">
                    {lit.progres}
                  </Typography>
                  <Typography gutterBottom>{lit.complet} X</Typography>
                  <Typography color="textSecondary">{lit.rest} Y</Typography>
                </Grid>
                <Grid item>
                  <Button fullWidth variant="contained" color="primary" component={Link} to={`/llico/1` /*`/leccion/${post.num}`*/}>
                    {lit.llicogo}
                  </Button>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">X%</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>

      )
    }
  }
}

DashBoardUserTest.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(DashBoardUserTest);