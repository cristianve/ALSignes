import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as lit from '../literals.js'

import Fab from '@material-ui/core/Fab';
import TouchApp from '@material-ui/icons/TouchApp';



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
    marginBottom: theme.spacing.unit,
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
  mainFeaturedPost: {

    //backgroundImage: ,
    backgroundColor: theme.palette.grey[800],
    //color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {

    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },

  cardSubfeature: {
    display: 'flex',
  },
  cardDetailsSubfeature: {
    flex: 1,
  },
  cardMediaSubfeature: {
    marginRight: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 6,
    marginBottom: theme.spacing.unit * 6,

    //backgroundImage: `url(${require('../img/logo.png')})`,
    height: 100,
    width: 100,
    position: 'center',

  },
  button: {
    //backgroundImage: `url(${require('./mesh-1430107_1280.png')})`,
    marginLeft: theme.spacing.unit * 8,
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,

  },
  progress: {
    marginTop: theme.spacing.unit * 8,
    margin: theme.spacing.unit * 2,
  },

});



const featuredPosts = [
  {
    title: 'Aprenentatge',
    description: `${lit.aprenExpl}`,
    link: '/Aprenentatge',


  },
  {
    title: 'Practica',
    description: `${lit.practExpl}`,
    link: '/practica',
  
  },
  {
    title: 'Buscador',
    description: `${lit.buscExpl}`,
    link: '/buscador',
  
  },
];


class Home extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      img:[],
      backgroundImage:"",

    };
  }

  componentDidMount() {

    fetch('/api/getAllImagenes?num=1')
    .then(response => response.json())
    .then(data => {

      this.setState({
        img: data,
       
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

  render() {

    const { classes } = this.props;
    const { image } = this.state;

  


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
      }else{

        const style = {
         backgroundImage:`url(data:image/png;base64,${this.state.backgroundImage.data})`,
        }


        return (
        
          <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
              <main>


                {/* Hero unit */}
                <div className={classes.heroUnit}>
                  <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      {lit.benv},
                    </Typography>
                    <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      {lit.textoHome3}
                    </Typography>
                    {/* End main featured post */}
                    <div className={classes.heroButtons}>
                      <Grid container spacing={16} justify="center">
                        <Grid item>
                          <Button variant="contained" color="primary" component={Link} to="/register">
                            {lit.reg}
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button variant="outlined" color="primary" component={Link} to="/login">
                            {lit.log}
                          </Button>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </main>
              {/* Main featured post */}
              <Paper  style={style} >
                <Grid container>
                  <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                      </Typography>
                      <Typography variant="h5" color="inherit" paragraph>
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
              <br />
              <br />
              {/* Sub featured posts */}
              <Grid container spacing={40} className={classes.cardGridSubfeature}>
                {featuredPosts.map((post,index) => 
                (
                  <Grid item key={post.title} xs={12} md={6}>
                    <Card className={classes.cardSubfeature}>
                      <div className={classes.cardDetailsSubfeature}>
                        <CardContent>
                          <Typography component="h2" variant="h5" gutterBottom>
                            {post.title}
                          </Typography>
                          <br />
                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>
                          <Typography variant="subtitle1" color="primary" position='center'>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                              <Fab
                                variant="extended"
                                size="medium"
                                color="primary"
                                aria-label="Add"
                                component={Link} to={post.link}
                              >
                                <TouchApp className={classes.extendedIcon} />
                                Anar a {post.title}!
                              </Fab>
                            </Typography>
                          </Typography>
                        </CardContent>
                      </div>
                      <Hidden xsDown>
                        <CardMedia
                          className={classes.cardMediaSubfeature}
                          image={`data:image/png;base64,${this.state.img.data[index]}`}
                          title={post.title}
                        />
                      </Hidden>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              {/* End sub featured posts */}
            </div>
          </React.Fragment>
        );
      



      }

 
  }
}


Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);