import React, { Component } from 'react';
import Camera from 'react-camera';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import { func } from 'prop-types';
import { callbackify } from 'util';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);


    this.state = {
      logged: false,
      name: null,

    };
  }
  componentDidMount() {


    fetch('api/home')
      .then(response => response.json())
      .then(logged => this.setState({ logged: logged.logged }));

    fetch('api/name')
      .then(response => response.json())
      .then(name => this.setState({ name: name.name }));
    /*
        fetch('/name')
          .then(response => response.json())
          .then(name => this.setState({ name: name.name }));*/
  }



  getAccuracy() {

    fetch('api/python?imageName=${}')
  };


  takePicture() {
    this.camera.capture()
      .then(blob => {

        function sendImage(blob, image, callback) {
          var form = new FormData();
          var request = new XMLHttpRequest();

          form.append("file", blob, image);

          var nombre = image;

          request.onreadystatechange = function() {
            if (request.readyState === 4) {
              callback();
            }
          }

          request.open(
            "POST",
            "/upload",

            true
          )
          request.send(form);


          
        }

        const nombre = this.state.name;

        sendImage(blob, nombre, function () {

          var request = new XMLHttpRequest();

          request.onreadystatechange = function() {
            if (request.readyState === 4) {
              document.getElementById('accuracy').innerHTML = request.response;
            }
          }
          var processing = "Procesant Imatge ..."
          document.getElementById('accuracy').innerHTML = processing;
          request.open(
            "GET",
            "/python?name=" + nombre, true
          )

          request.send(null);
        });



      });

  }





  render() {

    

    if (this.state.logged == true) {
      return (
        <div style={style.container}>
          <div id='accuracy'/>
          
          <Camera
            style={style.preview}
            ref={(cam) => {
              this.camera = cam;
            }}
          >
            <div style={style.captureContainer} onClick={this.takePicture}>
              <div style={style.captureButton} />
            </div>
          </Camera>
          <img
            style={style.captureImage}
            ref={(img) => {
              this.img = img;
            }}
          />
          <div id='accuracy'/>

        </div>
      );
    } else {

      return (
        <div >Vacio</div>
      )
    }
  }
}

const style = {
  preview: {
    position: 'relative',
  },
  container: {
    display: 'block',
    margin: 'auto',

    width: '40%',

  },
  captureContainer: {
    display: 'flex',
    position: 'absolute',
    justifyContent: 'center',
    zIndex: 1,
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {

    width: '80%',
  }
};

