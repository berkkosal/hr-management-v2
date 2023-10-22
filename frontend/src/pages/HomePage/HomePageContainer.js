import { Box, Stack, Typography } from '@mui/material';
import React from 'react'

function HomePageContainer() {





  return (
    <>
      <Box sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
       
      }}>
        <Stack>

          <Typography> Hoşgeldiniz. </Typography>
        </Stack>
      </Box>
    </>
  )
}

export default HomePageContainer;