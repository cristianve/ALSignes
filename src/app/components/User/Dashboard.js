import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import DashboardUser from './DashBoardUser';


class Dashboard extends Component {



  render() {

    return (

      <div>
        <CssBaseline />
        <DashboardUser />
      </div>
    );


  }
}

export default Dashboard;