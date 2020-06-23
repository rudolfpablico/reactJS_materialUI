import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import StarsIcon from '@material-ui/icons/Stars';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import LanguageIcon from '@material-ui/icons/Language';
import MessageIcon from '@material-ui/icons/Message';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import RateReviewIcon from '@material-ui/icons/RateReview';
import Box from '@material-ui/core/Box'

export default class Hosted extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item>
                        <ArrowForwardIosIcon color="error"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="h1" gutterBottom>
                            Hosted by
                        </Typography>
                    </Grid>
                </Grid>   
                
                <Container maxWidth="md" >
                        <Grid container xs spacing={2} alignItems="flex-start">
                            <Grid item xs={6} >
                                <Card>
                                    <CardContent >
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
                                                                </Typography>
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
                                                                <StarsIcon color="error" />
                                                                
                                                            </Grid>
                                                            <Grid item>
                                                                <Typography
                                                                    component="span"
                                                                    variant="body2"
                                                                    color="textPrimary"
                                                                    >
                                                                    99 Reviews
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                            }
                                                />
                                            </ListItem>
                                        </List>
                                        <Container maxWidth="xs">
                                            <Typography color={'textSecondary'} variant={'body2'}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum...
                                            </Typography>
                                        </Container>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">
                                            <Typography color="error" variant="body2">Read More</Typography>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6}  > 
                                <List >
                                    <ListItem>
                                    <ListItemAvatar>
                                        <LanguageIcon color="error" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Languages: English, Tagalog"
                                    />
                                    </ListItem>
                                </List>
                                <List >
                                    <ListItem>
                                    <ListItemAvatar>
                                        <RateReviewIcon color="error" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Response Rate: 100%"
                                    />
                                    </ListItem>
                                </List>
                                <List >
                                    <ListItem>
                                    <ListItemAvatar>
                                        <HourglassFullIcon color="error" />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Response Time: within a few hours"
                                    />
                                    </ListItem>
                                </List>
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <Box p={2}/> 
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        startIcon={<MessageIcon color="error"/>}
                                    >
                                        <Typography color="error">Contact Host</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>    
                </Container>

            </Container>    
        )
    }
}

