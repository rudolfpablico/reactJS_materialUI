import React, {Component }  from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Rating from '@material-ui/lab/Rating'


export default class Reviews extends Component {
    render () {
        return (
            <Grid item xs>
                <Card>
                    <CardContent >
                        <Avatar alt="Carl Pablico" src="https://www.oneworldplayproject.com/wp-content/uploads/2016/03/avatar-1024x1024.jpg" />
                        <Typography variant="body1">Carl Pablico</Typography>
                        <Rating value={2} size={'small'} readOnly max = {5} precision={0.5}/> 
                        <Typography color={'textSecondary'} variant={'body2'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            Read More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

