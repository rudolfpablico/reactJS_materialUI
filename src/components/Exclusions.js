import React, {Component }  from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import BlockIcon from '@material-ui/icons/Block';
import CloseIcon from '@material-ui/icons/Close';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


export default class Exclusions extends Component {
    render () {
        return (
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader   
                        avatar={
                            <BlockIcon color="secondary"/>
                        }
                        title={<Typography variant="h5">Exclusions</Typography>}
                        subheader={'These are the items you MAY OR HAVE TO PAY in addition to the tour fee'}
                    />
                

                    <CardContent>
                        <List dense="true" component="ul">
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CloseIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Exclusion 1"
                                />
                            </ListItem>
                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CloseIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Exclusion 2"
                                />
                            </ListItem>

                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CloseIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Exclusion 3"
                                />
                            </ListItem>

                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CloseIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Exclusion 4"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                
                </Card>
            </Grid>
        )
    }
}

