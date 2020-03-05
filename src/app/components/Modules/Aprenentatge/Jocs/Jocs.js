import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({

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


class Jocs extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.layout}>

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <br />
          Jocs
                </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          ...............................................................................
          ...............................................................................
          ...............................................................................
          ...............................................................................
                </Typography>
      </div>
    </React.Fragment>
    );
  }
}

export default withStyles(styles)(Jocs);