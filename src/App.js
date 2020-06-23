import React, { Component } from 'react'

import ImageLocations from './components/ImageLocations'
//import Navbar from './components/Navbar'
import TourHeader from './components/TourHeader'
import DetailsAndItinerary from './components/DetailsandItinerary'
import InclusionsExclusions from './components/InclusionsExclusions'
import Availability from './components/Availability'
import ReviewsWrapper from './components/ReviewsWrapper'
import Hosted from './components/Hosted'
import Terms from './components/Terms'
import Price from './components/Price'

import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box'


export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <ImageLocations />
        <TourHeader />
        <Divider />
        <Box p={3}/>
        <DetailsAndItinerary />
        <Divider variant="middle"/>
        <Box p={3}/>
        <InclusionsExclusions />
        <Box p={3}/>
        <Divider variant="middle"/>
        <Box p={3}/>
        <Availability />
        <Box p={3}/>
        <Divider variant="middle"/>
        <Box p={3}/>
        <ReviewsWrapper />
        <Box p={3}/>
        <Divider variant="middle"/>
        <Box p={3}/>
        <Hosted />
        <Box p={3}/>
        <Divider variant="middle"/>
        <Box p={3}/>
        <Terms />
        <Box p={6}/>
        <Price />
      </div>
    )
  }
}