import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


import classNames from 'classnames';

const styles = theme => ({

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
  
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },

});



const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];


function Footer(props) {
  const { classes } = props;

  return (
  <div>
     {/* Footer */}
     <footer className={classNames(classes.footer, classes.layout)}>
     <Grid container spacing={32} justify="space-evenly">
    {footers.map(footer => (
      <Grid item xs key={footer.title}>
        <Typography variant="h6" color="textPrimary" gutterBottom>
          {footer.title}
        </Typography>
        {footer.description.map(item => (
          <Typography key={item} variant="subtitle1" color="textSecondary">
            {item}
          </Typography>
        ))}
      </Grid>
    ))}
  </Grid>

 </footer>
   {/* End footer */}
   
   </div>
   
  );
}



export default withStyles(styles)(Footer);