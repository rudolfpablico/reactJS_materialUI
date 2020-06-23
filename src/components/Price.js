import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import StarsIcon from '@material-ui/icons/Stars'
import MessageIcon from '@material-ui/icons/Message'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
    
const useStyles = makeStyles((theme) => ({

  appBar: {
    top: 'auto',
    bottom: 0,
    
  }
  
}));

export default function Price() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <AppBar position="fixed" color="default" className={classes.appBar}>
        
        <Toolbar>

                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                >
                    <Typography color="secondary"> Php. 1999 per person </Typography>
                    <Grid container direction="row" alignItems="center" spacing={1}>
                        <Grid item>
                            <StarsIcon color="secondary" />
                        </Grid>
                        <Grid item>
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            > 2.5 (999) </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Box component="span" m={1}>
                    <Button variant="contained" color="secondary" disableElevation  startIcon={<MessageIcon color="default"/>}>
                        <Typography>CONTACT</Typography>
                    </Button>
                </Box>
                    
            
        </Toolbar>
      </AppBar>
     
    </React.Fragment>
  );
}
