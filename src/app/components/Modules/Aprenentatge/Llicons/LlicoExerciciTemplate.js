import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


//VIDEO PLAYER
import 'video-react/dist/video-react.css'; 
import { Player } from 'video-react';


import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import ReactDOM from 'react-dom';



import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

import Fab from '@material-ui/core/Fab';
import TouchApp from '@material-ui/icons/TouchApp';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
});

const steps = ['Ejercicio 1', 'Ejercicio 2', 'Ejercicio 3','Ejercicio 4', 'Ejercicio 5','Ejercicio 6', 'Ejercicio 7','Ejercicio 8', 'Ejercicio 9', 'Ejercicio 10'];
let respuesta="";

function actualizarVideo(palabra){
 

  
  fetch('/api/getVideo?name='+palabra) // Fetch image based on text entered
  .then(response => response.json())
  .then(resData => {
    if(resData.data == null){
      ReactDOM.render(<p style={{textAlign: 'center'}}>NO RECORD FOUND !</p>, document.getElementById('video-path'));
    }else{
      let data = resData.data;
      const Videodata = ({ data }) => 
        <video style={{marginTop: 30}} loop={true} className="video-container video-container-overlay" width="100%" height="100%" autoPlay controls>
                    <source src={`data:video/mp4;base64,${data}`} type="video/mp4" />
                </video>
      
      ReactDOM.render(<Videodata data={data} />, document.getElementById('video-path'));
    }
  })

}

function handleChange (event)  {
  console.log(event.target.value);
  respuesta = event.target.value;

};
 

function getRespuesta ()  {

  return respuesta;

};
 

function actualizarRespuestas(palabras, respuesta){

  let data;
  let arrayRespuestas =  ["","","",""];
  let arrayIndicesRandom = [];
  var min=0; 
  var max=4;  
  var maxTotal=palabras.length;  
  var random =Math.floor(Math.random() * (+max - +min)) + +min; 
  arrayRespuestas[random]= respuesta;
  arrayIndicesRandom[0]= random;
  var i=0;

  while(i!=3){
    var randomIndexPalabra =Math.floor(Math.random() * (+maxTotal - +min)) + +min;
    if(!arrayRespuestas.includes(palabras[randomIndexPalabra].name)){
      var done = false;
      while(!done){
        var randomIndexPos =Math.floor(Math.random() * (+max - +min)) + +min;
        if(!arrayIndicesRandom.includes(randomIndexPos)){
          arrayIndicesRandom[i+1]=randomIndexPos;
          arrayRespuestas[randomIndexPos]= palabras[randomIndexPalabra].name;
          done=true;
          i++;
        }
      }
    }
  }


       const Videodata = ({ data }) => 
                          <RadioGroup
                          name="opcion"
                          aria-label="Spacing"
                          onChange={handleChange}
                          row
                        >
                          <FormControlLabel value={arrayRespuestas[0]} control={<Radio />} label= {arrayRespuestas[0]} />
                          <FormControlLabel value={arrayRespuestas[1]} control={<Radio />} label={arrayRespuestas[1]} />
                          <FormControlLabel value={arrayRespuestas[2]} control={<Radio />} label={arrayRespuestas[2]} />
                          <FormControlLabel value={arrayRespuestas[3]} control={<Radio />} label={arrayRespuestas[3]} />
                        </RadioGroup>

      ReactDOM.render(<Videodata data={data} />, document.getElementById('respuestas'));
}


//SNACKBAR

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit,
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});



function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
   
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
});

//FIN SNACKBAR

class Checkout extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

      isLoading: true,
      users:[],
      activeStep: 0,
      numCategoria: 0,
      correcto:0,
      fallo:0,
      max:0,
      value:'empty',
      leccion:'empty',
      openCorrecto: false,
      openError: false,
   
    };
  }


  componentDidMount() {
      

    let numCategoria= Number(this.props.location.pathname[this.props.location.pathname.length-1]);
    fetch('/api/getCategory')
    .then(response => response.json())
    .then(data=>{
    
      this.setState({
        leccion:data[numCategoria-1].name,
        numCategoria: numCategoria,
      })

  
    })
    .catch(error => this.setState({ error, isLoading: false }));

    
    

 
    fetch('/api/getVideoCategory?num='+numCategoria)
    .then(response => response.json())
    .then(data=>{
    
      this.setState({
        users: data,
        isLoading: false,
        max: data.length,
        palabra: data[0].name,
        
      })
  
      actualizarRespuestas(this.state.users,this.state.users[this.state.activeStep].name);
      actualizarVideo(this.state.users[this.state.activeStep].name);

       
    })
    .catch(error => this.setState({ error, isLoading: false }));

  }

 

  handleNext = () => {

    let respuesta = getRespuesta();
    if(respuesta == this.state.users[this.state.activeStep].name )
    {
      //CORRECTO
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        correcto: state.correcto + 1,
        palabra: state.users[state.activeStep].name,
        openCorrecto: true,
      }));
    }else {
      //ERROR
      this.setState(state => ({
        activeStep: state.activeStep + 1,
        fallo: state.fallo + 1,
        palabra: state.users[state.activeStep].name,
        openError: true,
      }));
    }

  
    actualizarRespuestas(this.state.users,this.state.users[this.state.activeStep+1].name);
    actualizarVideo(this.state.users[this.state.activeStep+1].name);
    

  };

  //SNACKBAR
  handleClickCorrecto = () => {
    this.setState({ openCorrecto: true });
  };

  handleClickError = () => {
    this.setState({ openError: true });
  };

  handleCloseCorrecto = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openCorrecto: false });
  };

  handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openError: false });
  };

  getNextCategory = () => {
   
    return this.state.numCategoria + 1;
  };



  render() {


    const { classes } = this.props;
    const { activeStep,users,palabra } = this.state;

    return (
      
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Leccion {this.state.numCategoria} - {this.state.leccion}
            </Typography>
            <br/>
            <Typography component="h6" variant="h6" align="center">
            {}
            Aciertos: {this.state.correcto}
            </Typography>
            <Typography component="h6" variant="h6" align="center">
            Fallos: {this.state.fallo}
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{/*label*/}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom align="center">
                    Leccion Finalizada!
                  </Typography>
                  <Typography variant="subtitle1" align="center">
                    El resultado obtenido durante la leccion es de {this.state.correcto}/10
                  </Typography>
                  {console.log(this.state.numCategoria)}
                
                  <Fab

                    variant="extended"
                    size="medium"
                    color="primary"
                    aria-label="Add"
                    className={classes.button}
                    component={Link} to={'/llico/' +(`${this.state.numCategoria + 1}`)}
                   //component={Link} to={'/llico/2'}
                    >

                    Anar a la següent lliço: {this.state.leccion}
                    <TouchApp className={classes.extendedIcon} />

                    </Fab>





                </React.Fragment>
              ) : (
                <React.Fragment>

              <div>
                  <Typography variant="h6" gutterBottom>
                   Elige la opcion correcta:
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                  De que {this.state.leccion} se trata?
                  </Typography>
                  {/*Video */}
                  <div id="video-path"></div>
                  {/*Respuestas */}
                  <div id="respuestas"></div>

                  {/*SNACKBAR */}

                    <Snackbar
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      open={this.state.openCorrecto}
                      autoHideDuration={3000}
                      onClose={this.handleCloseCorrecto}
                    >
                      <MySnackbarContentWrapper
                        onClose={this.handleCloseCorrecto}
                        variant="success"
                        message="Respuesta Correcta!"
                      />
                    </Snackbar>

                    {/**Error */}
                    <Snackbar
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      open={this.state.openError}
                      autoHideDuration={3000}
                      onClose={this.handleCloseError}
                    >
                      <MySnackbarContentWrapper
                        onClose={this.handleCloseError}
                        variant="error"
                        message="Respuesta Incorrecta!"
                      />
                    </Snackbar>


              </div>
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Resultat Final' : 'Comprobar'}
                    </Button>
                  </div>
                </React.Fragment>

              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
