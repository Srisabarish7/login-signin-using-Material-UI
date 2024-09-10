import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container } from '@mui/material';
import Home from './component/home';
import Login from './component/Login';
import Register from './component/register';

function App() {
  return (
    <Router>
      <CssBaseline>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Container>
      </CssBaseline>
    </Router>
  );
}

export default App;
