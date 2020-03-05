import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';

import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import TouchApp from '@material-ui/icons/TouchApp';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as lit from '../../../literals.js'

const styles = theme => ({
  cardSubfeature: {
    display: 'flex',
  },
  cardDetailsSubfeature: {
    flex: 1,
  },
  cardMediaSubfeature: {

    marginRight: theme.spacing.unit * 4,
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 6,


    height: 100,
    width: 100,
    position: 'center',
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
  mainFeaturedPost: {
    align: "center",
    marginTop: theme.spacing.unit * 4,
    backgroundColor: theme.palette.grey[800],
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
  button: {
  

    marginLeft: theme.spacing.unit * 8,
    marginRight: theme.spacing.unit * 8,
    margin: theme.spacing.unit ,
  },
  extendedIcon: {
    marginLeft: theme.spacing.unit,
    
  },
});


class Lliçons extends React.Component {


  constructor(props) {
    super(props);

    this.state = {

      isLoading: true,
      category: [],
      img:[],
      backgroundImage:"",
    };
  }


  componentDidMount() {
    fetch('/api/getCategory')
      .then(response => response.json())
      .then(data => {

        this.setState({
          category: data,
    

        })

      })
      .catch(error => this.setState({ error, isLoading: false }));


      fetch('/api/getAllImagenes?num=3')
      .then(response => response.json())
      .then(data => {
  
        this.setState({
          img: data,
         
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  
      fetch('/api/getImage?num=16')
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
      <div>


        <CssBaseline />
        <div className={classes.layout}>
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            <br />
            {lit.aprenLliç}
          </Typography>

          {/* Main featured post */}
          <Paper style={style}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                </div>
              </Grid>
            </Grid>
          </Paper>



          <br />
          <br />
          {/* Sub featured posts */}


          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGridSubfeature}>
            {this.state.category.map((post,index) => (
              <Grid item key={post.categID} xs={12} md={6}>
                <Card className={classes.cardSubfeature}>
                  <div className={classes.cardDetailsSubfeature}>
                    <CardContent>
                      <Typography component="h2" variant="h5">

                        Lliçó {post.categID} - {post.name}
                      </Typography>
                      <br />
                      <Typography variant="subtitle1" paragraph>
                        {post.descripcion}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        Dificultat:  {post.difficulty}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        Tiempo aprox: {post.desctime}
                      </Typography>
                      <br />


                      <Typography variant="h5" align="center" color="textSecondary" paragraph>
                        <Fab

                          variant="extended"
                          size="medium"
                          color="primary"
                          aria-label="Add"
                          className={classes.button}
                          component={Link} to={'/llico/' + `${post.categID}`}
                        >

                         Començar lliçó {post.name}
                          <TouchApp className={classes.extendedIcon} />

                        </Fab>
                      </Typography>

                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.casrdMediaSubfeature}
                      image={`data:image/png;base64,${this.state.img.data[index]}`}
                      title={post.image}
                    />
                  </Hidden>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}

        </div>
      </div>
    );
  }
}
}

export default withStyles(styles)(Lliçons);;
