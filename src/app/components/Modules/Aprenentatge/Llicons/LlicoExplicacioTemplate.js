import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ReactDOM from 'react-dom';

//VIDEO PLAYER
import 'video-react/dist/video-react.css';
import { Player } from 'video-react';


import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import TouchApp from '@material-ui/icons/TouchApp';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
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
    width: 500,
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
  progress: {
    marginTop: theme.spacing.unit * 8,
    margin: theme.spacing.unit * 2,
  },

});

const cards = [1];


class LlicoExplicacioTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      isLoading: true,
      users: [],
      activeStep: 0,
      correcto: 0,
      fallo: 0,
      max: 0,
      value: 'empty',
      leccion: 'empty',
      openCorrecto: false,
      openError: false,
      numCategoria: 0,
      videos: [],
      img: [],

    };
  }


  componentDidMount() {


    let numCategoria = this.props.location.pathname[this.props.location.pathname.length - 1];
    console.log(numCategoria);
    fetch('/api/getCategory')
      .then(response => response.json())
      .then(data => {

        this.setState({
          leccion: data[numCategoria - 1].name,
          numCategoria: numCategoria,
        })

      })
      .catch(error => this.setState({ error, isLoading: false }));


    fetch('/api/getVideoCategory?num=' + numCategoria)
      .then(response => response.json())
      .then(data => {

        this.setState({
          users: data,
          max: data.length,
          palabra: data[0].name,


        })
      })
      .catch(error => this.setState({ error, isLoading: false }));

    fetch('/api/getAllImage?num=' + numCategoria)
      .then(response => response.json())
      .then(data => {

        this.setState({
          img: data,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));

    fetch('/api/getAllVideos?num=' + numCategoria)
      .then(response => response.json())
      .then(data => {

        this.setState({
          videos: data,
          isLoading: false,
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));

  }





  render() {

    const { classes } = this.props;
    const { activeStep, users, videos } = this.state;



    if (this.state.isLoading) {

      return (
        <React.Fragment>
        <CssBaseline />
        <main>
        <div className={classes.layout}>
        <Typography align="center">

        <CircularProgress  className={classes.progress} />
        </Typography>

        </div>
        </main>
        </React.Fragment>
      )
    }
    return (

      <React.Fragment>
        <CssBaseline />
        <main>
          {/* Hero unit */}
          <div className={classes.heroUnit}>
            <div className={classes.heroContent}>
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Tema {this.state.numCategoria} - {this.state.leccion}
              </Typography>
              <Typography variant="h6" align="center" color="textSecondary" paragraph>
                En aquest tema veurem els colors bàsics en llenguatge de signes
            </Typography>
            </div>
          </div>
          <div className={classNames(classes.layout, classes.cardGrid)}>
            {/* End hero unit */}
            {
              users.map((user, index) =>
                (
                  <Grid container spacing={40} justify="center" >
                    {
                      cards.map(card => (
                        <Grid item>
                          <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                              <Typography gutterBottom variant="h5" component="h2" align="center">
                                {user.name}
                                <br />
                                <img src={`data:image/png;base64,${this.state.img.data[index]}`} width='50' height='50' />
                              </Typography>
                              <div>
                                <video style={{ marginTop: 30 }} loop={true} className="video-container video-container-overlay" width="100%" height="100%" controls >
                                  <source src={`data:video/mp4;base64,${this.state.videos.data[index]}`} type="video/mp4" />
                                </video>
                              </div>
                              <br />
                              <br />
                            </CardContent>

                          </Card>
                        </Grid>
                      ))
                    }
                  </Grid>
                ))

            }
            <br />

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <Fab

                variant="extended"
                size="medium"
                color="primary"
                aria-label="Add"
                className={classes.button}
                component={Link} to={'/exercici/' + `${this.state.numCategoria}`}
              >

                Començar Exercici {this.state.leccion}
                <TouchApp className={classes.extendedIcon} />

              </Fab>
            </Typography>

          </div>
        </main>

      </React.Fragment>
    );
  }
}

LlicoExplicacioTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LlicoExplicacioTemplate);
