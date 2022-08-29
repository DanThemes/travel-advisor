import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core'
import { LocationOnIcon } from '@material-ui/icons';

const PlaceDetails = ({place}) => {
  // console.log(place);

  return (
    <div>{place.name}</div>
  )
}

export default PlaceDetails