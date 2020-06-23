import React, {Component }  from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import ControlPointDuplicateIcon from '@material-ui/icons/ControlPointDuplicate';
import CheckIcon from '@material-ui/icons/Check';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


export default class Inclusions extends Component {
    render () {
        return (
            <Grid item xs={12} md={6}>
                <Card>
                    <CardHeader   
                        avatar={
                            <ControlPointDuplicateIcon color="secondary"/>
                        }
                        title={<Typography variant="h5">Inclusions</Typography>}
                        subheader={'These are the items ALREADY INCLUDED on the tour fee'}
                    />
                

                    <CardContent>
                        <List dense="true" component="ul">
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CheckIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inclusion 1"
                                />
                            </ListItem>
                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CheckIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inclusion 2"
                                />
                            </ListItem>

                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CheckIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inclusion 3"
                                />
                            </ListItem>

                            
                            <ListItem component="li">
                                <ListItemIcon>
                                    <CheckIcon  color="secondary"/>
                                </ListItemIcon>
                                <ListItemText
                                    primary="Inclusion 4"
                                />
                            </ListItem>
                        </List>
                    </CardContent>
                
                </Card>
            </Grid>
        )
    }
}

