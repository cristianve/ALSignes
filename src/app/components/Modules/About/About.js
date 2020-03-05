import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as lit from '../../literals.js'

class About extends Component {
  render() {
    return (
      <div>
        <CssBaseline />

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <br />
          About
                </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>

          <br />
          {lit.about}
          <br />
          <br />

        </Typography>

      </div>
    );
  }
}

export default About;