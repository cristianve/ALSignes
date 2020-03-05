import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';

import PersonAdd from '@material-ui/icons/PersonAdd';
import Person from '@material-ui/icons/Person';

import * as lit from  '../literals.js'



const styles = theme => ({
 
    toolbarMain: {
      //backgroundImage: `url(${require('./background-blue.jpg')})`,
      //"/static/images/background-blue.jpg",
      //
        backgroundColor: `${theme.palette.grey[300]}`,
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        
      },
      toolbarTitle: {
        flex: 1,
        color: theme.palette.common.white,
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
      },
      button: {
        margin: theme.spacing.unit,
      },
      extendedIcon: {
        marginRight: theme.spacing.unit,
      },
});

class AppBar extends React.Component {
  

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      logo:"",
      backgroundImage:"",

    };
  }

  componentDidMount() {


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


      return (

        <Toolbar style={style}>
        <Typography component= "h1" align="left" color="inherit" noWrap className="clasNameHere"></Typography>
      
        
        <IconButton>
       
          <Button size="small" href="/" >


          <img src={`data:image/png;base64,${this.state.logo.data}`} width='150' height='150' />
        
       
          </Button>
        </IconButton>
      


      {/* QUITAR TEXTO PONER LOGO TEXTO IZQUIERDA BOTOENES DERECHA */}
        <Typography
          component="h2"
          variant="h2"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
         {lit.nombreProy2}  
        </Typography>

        <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Add"
        className={classes.button}
        component={Link} to="/login"
      >
        <Person className={classes.extendedIcon} />
        {lit.log}
      </Fab>

      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Add"
        className={classes.button}
        component={Link} to="/register"
      >
        <PersonAdd className={classes.extendedIcon} />
        {lit.reg} 
      </Fab>
      
    </Toolbar>



      )
  
  }
  }
}



export default withStyles(styles)(AppBar);