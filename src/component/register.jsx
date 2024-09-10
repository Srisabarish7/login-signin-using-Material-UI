import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CssBaseline, AppBar, Toolbar, TextField, Button, Typography, Container, Box, Alert } from '@mui/material';
import Person from '@mui/icons-material/Person';
import Lock from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import downloadImage from '../Assests/download.png';
import Login from '@mui/icons-material/Login';

function Register() {
    const [action] = useState("Register");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retype, setRetype] = useState("");
    const [errors, setErrors] = useState({});
    const [alert, setAlert] = useState({ type: "", message: "" });
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleRegister = () => {
        let validationErrors = {};
        if (name === "") {
            validationErrors.name = "*required";
        }

        if (email === "") {
            validationErrors.email = "*required";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Please enter a valid Email";
        }

        if (password === "") {
            validationErrors.password = "*required";
        } else if (password.length < 8) {
            validationErrors.password = "Please set a strong password";
        }

        if (retype === "") {
            validationErrors.retype = "*required";
        } else if (retype !== password) {
            validationErrors.retype = "Passwords do not match";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setAlert({ type: "error", message: "Enter the Details in the Required field" });
            return;
        }

        setAlert({ type: "success", message: "Registered successfully!" });
        setTimeout(() => navigate('/login'), 2500);
    };

    const handleInputChange = (field, value) => {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
        setAlert({ type: "", message: "" });
        switch (field) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "retype":
                setRetype(value);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <CssBaseline />
            <AppBar sx={{ height: '85px', backgroundColor: 'primary' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box component="img" src={downloadImage} alt="Logo" sx={{ height: 45, paddingRight: '50%' }} />
                        <Box sx={{ marginLeft: '30%' }}>
                            <Button variant="outlined" color="secondary" endIcon={<HomeIcon />} href="/" sx={{ color: 'black', fontSize: 15, textTransform: 'none', height: '50px', marginTop: '20px' }}>
                                Home
                            </Button>
                            <Button variant="outlined" color="secondary" href="/login" endIcon={<Login />} sx={{ color: 'black', fontSize: 15, textTransform: 'none', height: '50px', marginTop: '20px', marginLeft: '10px' }}>
                                Login
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Container maxWidth="sm" sx={{backgroundColor: 'white',borderRadius: '20px',padding: '30px',marginTop: '130px'}}>
                <Box sx={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Typography variant="h4" component="div" sx={{ fontWeight: '700' }}>{action}</Typography>
                </Box>

                {alert.message && (
                    <Box sx={{ marginBottom: '20px' }}>
                        <Alert severity={alert.type}>{alert.message}</Alert>
                    </Box>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Person sx={{ marginRight: '10px' }} />
                        <TextField label="Name" value={name} onChange={(e) => handleInputChange("name", e.target.value)} error={!!errors.name} helperText={errors.name} fullWidth InputProps={{ disableUnderline: true }}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <EmailIcon sx={{ marginRight: '10px' }} />
                        <TextField label="Email" value={email} onChange={(e) => handleInputChange("email", e.target.value)} error={!!errors.email} helperText={errors.email} fullWidth InputProps={{ disableUnderline: true }}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Lock sx={{ marginRight: '10px' }} />
                        <TextField label="Password" type="password" value={password} onChange={(e) => handleInputChange("password", e.target.value)} error={!!errors.password} helperText={errors.password} fullWidth InputProps={{ disableUnderline: true }}/>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Lock sx={{ marginRight: '10px' }} />
                        <TextField label="Re-Type Password" type="password" value={retype} onChange={(e) => handleInputChange("retype", e.target.value)} error={!!errors.retype} helperText={errors.retype} fullWidth InputProps={{ disableUnderline: true }}
                        />
                    </Box>
                </Box>

                <Box sx={{ textAlign: 'left', marginTop: '27px' }}>
                    <Typography variant="body2" color="textSecondary">
                        Already have an account? <NavLink to="/login">Login</NavLink>
                    </Typography>
                </Box>

                <Box sx={{ textAlign: 'center', marginTop: '40px' }}>
                    <Button variant="contained" color="primary" onClick={handleRegister} sx={{width: '200px',height: '50px',borderRadius: '50px',fontSize: '15px',fontWeight: '500'}}>
                        Register
                    </Button>
                </Box>
            </Container>
        </>
    );
}

export default Register;
