import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DepartureBoardIcon from '@material-ui/icons/DepartureBoard';
import Grid from '@material-ui/core/Grid'

import Itinerary from './Itinerary'

export default class DetailsAndItinerary extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item>
                        <ArrowForwardIosIcon color="primary"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="h1" gutterBottom>
                            Details and Itinerary
                        </Typography>
                    </Grid>
                </Grid>            


                <Container  maxWidth="md">
                    <List component="ul">
                        <ListItem component="li">
                            <ListItemIcon>
                                <AssignmentIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary="Details"/>
                        </ListItem>
                        <ListItem component="li" alignItems="center">
                            <ListItemText primary= {
                                <Typography variant="body2" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                            } />
                        </ListItem>
                        <ListItem component="li">
                            <ListItemIcon>
                                <DepartureBoardIcon color="primary"/>
                            </ListItemIcon>
                            <ListItemText primary="Itinerary" />
                        </ListItem>
                        <ListItem component="li" alignItems="center">
                            <Itinerary />
                        </ListItem>
                        
                    </List>
                </Container>
            </Container>
        )
    }
}


 