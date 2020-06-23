import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Box from '@material-ui/core/Box'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';

export default class Terms extends Component {
    render() {
        return (
            <Container maxWidth="lg" >
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item>
                        <ArrowForwardIosIcon color="primary"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="h1" gutterBottom>
                            Terms
                        </Typography>
                    </Grid>
                </Grid>   
                
                <Container maxWidth="md" >
                        <Grid container xs spacing={6} alignItems="flex-start">
                            <Grid item xs={6} >
                                <Typography variant={'h6'}>
                                   From the Host
                                </Typography>
                                <Box p={1} />
                                <Card>
                                    <CardContent >
                                        <Container maxWidth="xs">
                                            <Typography color={'textSecondary'} variant={'body2'}>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum...
                                            </Typography>
                                        </Container>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Read More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6}  > 
                                <Typography variant={'h6'}>
                                   From Biyahe
                                </Typography>
                                <Box p={2} />
                                <Grid
                                    container
                                    direction="column"
                                    justify="center"
                                    alignItems="flex-start"
                                    
                                >
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<ChromeReaderModeIcon color="primary"/>}
                                        fullWidth="true"
                                    >
                                        <Typography color="primary">Terms and Conditions</Typography>
                                    </Button>
                                    <Box p={2} />
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<VpnKeyIcon color="primary"/>}
                                        fullWidth="true"
                                    >
                                        <Typography color="primary">Privacy Policy</Typography>
                                    </Button>
                                    <Box p={2} />
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        startIcon={<AssignmentLateIcon color="primary"/>}
                                        fullWidth="true"
                                    >
                                        <Typography color="primary">Safety and Cancellation Policy</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>    
                </Container>

                <Box p={2} />
                <Container maxWidth="md" >

                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <Typography color="secondary" variant="h6">Is this tour violating our terms and policies?</Typography>    
                    <Button variant="outlined" size="large" color="secondary">
                        Report this listing.
                    </Button>
                </Grid>    
                </Container>
            </Container>    
        )
    }
}

