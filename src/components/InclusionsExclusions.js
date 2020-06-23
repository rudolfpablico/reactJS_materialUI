import React, { Component } from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Grid from '@material-ui/core/Grid'
import Inclusions from './Inclusions'
import Exclusions from './Exclusions'


export default class InclusionsExclusions extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item>
                        <ArrowForwardIosIcon color="secondary"/>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" component="h1" gutterBottom>
                        Inclusions and Exclusions
                        </Typography>
                    </Grid>
                </Grid>   

                <Container maxWidth="lg" align="center">
                    <Grid container xs={12} spacing={4} alignItems="flex-start">
                        <Inclusions />
                        <Exclusions />
                    </Grid>
                </Container>

            
            </Container>
        )
    }
}

 
