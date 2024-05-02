import React from 'react';
import { TextField, Button, Paper, Typography, Box } from '@mui/material';
import '../LoginStyles.css';

function Login() {
  return (
    <Box className="login-container">
      <Paper elevation={10} className="login-paper">
        <Typography variant="h5" component="h1" textAlign="center">
          Login
        </Typography>
        <TextField
          label="Usuário"
          variant="outlined"
          fullWidth
          required
          className="login-field"
        />
        <TextField
          label="Senha"
          type="password"
          variant="outlined"
          fullWidth
          required
          className="login-field"
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          className="login-button"
        >
          Entrar
        </Button>
      </Paper>
    </Box>
  );
}

export default Login;
