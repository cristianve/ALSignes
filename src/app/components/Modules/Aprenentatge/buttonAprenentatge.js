import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import * as lit from '../../literals.js'


const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
    justifyContent: 'center',

  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

const images = [
  {
    title: `${lit.aprenLliç}`,
    width: '30%',
    ruta: '/llicons',
  },
  {

    title: `${lit.aprenJocs}`,
    width: '30%',
    ruta: '/jocs',
  },

];

class ButtonBases extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      img:[],

    };
  }

  componentDidMount() {

    fetch('/api/getAllImagenes?num=2')
    .then(response => response.json())
    .then(data => {

      this.setState({
        img: data,
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
  

      </div>
      </main>
      </React.Fragment>
     
    )
    }else{
   
  return (
    <div className={classes.root}>
      {images.map((image,index) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          component={Link} to={image.ruta}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(data:image/png;base64,${this.state.img.data[index]}`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
}
}

ButtonBases.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonBases);