import React from 'react'
import { AppBar,Toolbar,CssBaseline,Button,Typography,Container,Box } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import downloadImage from '../Assests/download.png'


const home = () => {
  return (
    <>
    <CssBaseline/>
        <AppBar sx={{height:"85px"}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="img" src={downloadImage} alt="Logo" sx={{ height: 50, paddingRight: '50%',marginTop:"20px"}} />
            <Box sx={{marginLeft:"30%"}}>
              <Button  variant="outlined" color="secondary" endIcon={<LoginIcon/>} href="/login" sx={{ color: 'black', fontSize: 15, textTransform:"none",height:"50px",marginTop:"20px"}}>
                Login
              </Button>
              <Button variant="outlined" color="secondary" href="/register" endIcon={<AppRegistrationIcon/>} sx={{ color: 'black', fontSize: 15, textTransform: 'none',height:"50px",marginTop:"20px",marginLeft:"10px"}}>
                Register
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>        
      
      <menu>
            <Typography variant='h3'align='center' sx={{marginTop:"100px"}}>
                CUBEAI SOLUTIONS
            </Typography>
        </menu>
    </>
  )
}

export default home