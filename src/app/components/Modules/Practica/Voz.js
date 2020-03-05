import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

//-----------------SPEECH RECOGNITION SETUP---------------------

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

recognition.continous = true
recognition.interimResults = true
recognition.lang = 'es'

//------------------------COMPONENT-----------------------------

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  button: {
    width: '40px',
    height: '40px',
    background: 'green',
    borderRadius: '50%',
    margin: '6em 0 2em 0'
  },
  interim: {
    color: 'gray',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '300px'
  },
  final: {
    color: 'white',
    border: '#ccc 1px solid',
    padding: '1em',
    margin: '1em',
    width: '500px',
    height: '10px'
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


class Voz extends Component {

  constructor() {
    super()
    this.state = {
      listening: false
    }
    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  //Cambiar estado grabar/no grabar
  toggleListen() {
    if (this.state.listening !== true) {
      this.setState({
        listening: !this.state.listening
      }, this.handleListen)
    }
  }


  //Gestionar el reconocimiento
  handleListen() {
    if (this.state.listening) {
      recognition.start()
      let finalTranscript = ''
      recognition.onresult = event => {
        let interimTranscript = ''
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal)
            finalTranscript += transcript + ' ';
          else
            interimTranscript += transcript;
        }
        let words = finalTranscript.split(' ')
        //document.getElementById('interim').innerHTML = interimTranscript

        //Esto va en el render si queremos ver lo que dices mientras lo dices
        //<div id='interim' style={interim}></div>

        let spell = words[0].split('')
        document.getElementById('final').innerHTML = words
        this.state.listening = false;
        document.getElementById('final').innerHTML = finalTranscript
      }
    }

  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
      <div className={classes.layout}>
      <div className={classes.container}>
        <button id='microphone-btn' className={classes.button} onClick={this.toggleListen} />
        <div id='final' className={classes.final}/>
        <div id='interim' className={classes.interim}/>
        <div id='list'/>
      </div>
      </div>
    
    </React.Fragment>
    )
  }
}


export default withStyles(styles)(Voz);


//-------------------------CSS------------------------------------
/*
const styles = {
 
}

const { container, button, interim, final } = styles*/

