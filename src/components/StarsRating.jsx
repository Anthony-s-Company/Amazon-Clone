/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function StarsRating({rating}) {
  // const [value, setValue] = React.useState(2);
  
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
    <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
    </Box>
  );
}