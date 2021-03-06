import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import BuscadorFun from './BuscadorFun';


import * as lit from '../../literals.js'



class Buscador extends Component {
  render() {
    return (
      <div>
        <CssBaseline />

        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          <br />
          {lit.busc}
        </Typography>

        <Typography variant="h6" align="center" color="textSecondary" paragraph>

          {lit.busaboutcMenu}
          <br />
          <br />
        </Typography>


        <BuscadorFun />
      </div>
    );
  }
}

export default Buscador;