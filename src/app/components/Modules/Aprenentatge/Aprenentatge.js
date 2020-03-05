import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBases from './buttonAprenentatge';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';


import * as lit from  '../../literals.js'

const styles = theme => ({
  
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  
});

class Aprenentatge extends Component {
  render() {
    return (
      <div>
      <CssBaseline />
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        <br />
        {lit.apren}
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        {lit.aprenExpl}
        <br />
        <br />
      </Typography>
      <ButtonBases />
    </div>
    );
  }
}

export default withStyles(styles)(Aprenentatge);