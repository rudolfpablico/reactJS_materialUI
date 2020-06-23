import React, { Component } from 'react'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating'
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Grid from '@material-ui/core/Grid'
import Reviews from './Reviews'
import Button from '@material-ui/core/Button'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

export default class ReviewsWrapper extends Component {
    render() {
        return (
            <Container maxWidth="lg">
                <Grid container direction="row" alignItems="center" spacing={2}>
                    <Grid item>
                        <Rating 
                            name="half-rating-read" 
                            value={2.5} 
                            precision={0.5} 
                            readOnly
                            size="large"
                            max = {5} 
                            // icon={<FavoriteIcon/>}
                        />
                    </Grid>
                    <Grid item>
                        <Typography
                            component="h1"
                            variant="h6"
                            gutterBottom
                        >
                        2.5 (999 reviews)
                        </Typography>
                    </Grid>
                </Grid>

                <Container maxWidth="md" align="center">
                    <Grid container xs spacing={2} alignItems="center">
                        <Reviews />
                        <Reviews />
                        <Reviews />

                        {/* <IconButton color="primary" >
                            <ArrowForwardIosOutlinedIcon />
                        </IconButton> */}
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={<ArrowForwardIosOutlinedIcon />}
                        >
                            Read More
                        </Button>
                    </Grid>
                </Container>

            </Container>
        )
    }
}


