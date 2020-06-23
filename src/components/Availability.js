import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
//   Calendar
} from '@material-ui/pickers';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'


export default function MaterialUIPickers() {

    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth();
    var day = today.getDate();
    var maximumDate = new Date(year + 5, month, day);
    
    const [selectedDate, setSelectedDate] = React.useState(today);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };    

  return (
    <React.Fragment>
        <Container maxWidth="lg">
 
            <Grid container direction="row" alignItems="center" spacing={2}>
                <Grid item>
                    <EventAvailableIcon color="primary"/>
                </Grid>
                <Grid item>
                <   Typography variant="h6" component="h1" gutterBottom>
                        Tour Availability
                    </Typography>
                </Grid>
            </Grid>   
        </Container> 
        <Container maxWidth="sm" align="center"> 
            <MuiPickersUtilsProvider utils={DateFnsUtils}> 
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Availability Date"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    variant="static"
                    autoOk
                    orientation="landscape"
                    animateYearScrolling = "true"
                    minDate={today}
                    initialFocusedDate={today}
                    maxDate={maximumDate}
                    
                />
            </MuiPickersUtilsProvider>
        </Container>
    </React.Fragment>
  );
}