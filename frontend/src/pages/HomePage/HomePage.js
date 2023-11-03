import { Box, Button, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';






function HomePageContainer() {


  let token = localStorage.getItem("token")




  return (
    <>

      {token != null ? (
        <>


          <Typography variant='h1'>Hoşgeldin, </Typography>
          <Typography variant='h5'></Typography>

          <Box sx={{
            height: '70vh',
            display: 'flex',
            backgroundColor: 'yellowgreen',
            backgroundImage: `url('https://media.istockphoto.com/id/1303502055/tr/foto%C4%9Fraf/qr-kodu-ile-restoran-men%C3%BCs%C3%BCne-dan%C4%B1%C5%9Fmanl%C4%B1k-eden-kad%C4%B1n.jpg?s=1024x1024&w=is&k=20&c=7k-p9BUxcTFnASRhy7tfKyg4kgepN4G7W7c8Xk7Gr_M=')`,
            backgroundSize: 'cover',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '10px'
          }}>

            <Stack sx={{
              position: 'absolute',
              right: '10%',
              top: '10%',
              textAlign: 'left',
            }}>
              <Typography sx={{ fontSize: '4rem', color: 'white' }}> Hoşgeldiniz. </Typography>
            </Stack>

          </Box>
        </>
      ) : (
        <>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
          <Button>alo</Button>
          <Link to='login'>
            <Button>Login</Button>
          </Link>
        </>
      )}
    </>

  )
}

export default HomePageContainer;