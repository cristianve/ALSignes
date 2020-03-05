import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ButtonBases from './buttonPractica';


import CssBaseline from '@material-ui/core/CssBaseline';

import * as lit from '../../literals.js'


class Practica extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <br />
         {lit.pract}
                </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          {lit.practMenu}
          <br />
          <br />
        </Typography>
        <ButtonBases />
      </div>
    );
  }
}

export default Practica;