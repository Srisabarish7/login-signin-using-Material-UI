import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {AppBar,Toolbar,CssBaseline,Button,Typography,Container,Box,TextField,Link,IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import downloadImage from '../Assests/download.png';

const Login = () => {
  const [action] = useState('Login');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    let validationErrors = {};
    if (name === '') {
      validationErrors.name = '*required';
    }
    if (password === '') {
      validationErrors.password = '*required';
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    navigate('/');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <CssBaseline />
      <AppBar sx={{ height: '85px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box component="img" src={downloadImage} alt="Logo" sx={{ height: 45, paddingRight: '50%'}} />
            <Box sx={{ marginLeft: '30%' }}>
              <Button variant="outlined" color="secondary" endIcon={<HomeIcon />} href="/" sx={{ color: 'black', fontSize: 15, textTransform: 'none', height: '50px', marginTop: '20px' }}>
                Home
              </Button>
              <Button variant="outlined" color="secondary" href="/register" endIcon={<AppRegistrationIcon />} sx={{ color: 'black', fontSize: 15, textTransform: 'none', height: '50px', marginTop: '20px', marginLeft: '10px' }}>
                Register
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{display: 'flex',flexDirection: 'column',alignItems: 'center',width: '450px',padding: "40px",borderRadius: "20px",background:"#ffff",marginTop:"200px",marginLeft:"30%"}}>
        <Box sx={{ marginBottom: '30px' }}>
          <Typography variant="h4">{action}</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <PersonIcon />
            <TextField variant="outlined" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} error={!!errors.name} helperText={errors.name} fullWidth InputProps={{ disableUnderline: true }} sx={{ marginLeft: 1 }}/>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>            
            <LockIcon/>
            <TextField type={showPassword ? 'text' : 'password'} variant="outlined" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} error={!!errors.password} helperText={errors.password} fullWidth InputProps={{ disableUnderline: true }} sx={{ marginLeft: 1 }}/>
            <IconButton onClick={handleClickShowPassword} edge="end" sx={{ marginLeft: -5 }}> {showPassword ? <VisibilityOff /> : <Visibility />}</IconButton>
          </Box>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">Forgot Password?
            <Link href="#" underline="none">Click Here</Link>
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">Don't have an account?
            <Link href="/register" underline="none">Register</Link>
          </Typography>
        </Box>
        <Box mt={4}>
          <Button variant="contained" color="primary" onClick={handleLogin} sx={{width: '200px',height: '50px',borderRadius: '50px',fontSize: '15px',fontWeight: '500'}}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Login;
