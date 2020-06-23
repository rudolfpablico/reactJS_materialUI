import React, { Component } from 'react'
import 'fontsource-roboto';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Rating from '@material-ui/lab/Rating'
// import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'

export default class TourHeader extends Component {
    render() {
        return (
            <Container maxWidth="sm">
                <Box m="2rem" />
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Tour Title
                </Typography>
                <List >
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Carl Pablico" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<React.Fragment>
                                        <Typography 
                                                component="span"
                                                variant="body1">
                                                Carl Pablico 
                                            </Typography>x
                                        <Typography 
                                            component="span"
                                            variant="body2"
                                            color="textSecondary">
                                            — Joined last June 2020
                                        </Typography>
                                    </React.Fragment>        
                                    }
                            secondary={
                                    <Grid container direction="row" alignItems="center" spacing={1}>
                                        <Grid item>
                                            <Rating 
                                                name="half-rating-read" 
                                                value={2.5} 
                                                precision={0.5} 
                                                readOnly 
                                                max = {5} 
                                                // icon={<FavoriteIcon/>}
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography
                                                component="span"
                                                variant="body2"
                                                color="textPrimary"
                                                >
                                                2.5
                                            </Typography>
                                        </Grid>
                                    </Grid>
                              }
                        />
                    </ListItem>
                </List>

            </Container>
        )
    }
}

 
