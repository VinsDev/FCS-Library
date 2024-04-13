import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'tailwindcss/tailwind.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/admin/home');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">FCS Library Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Username or Email"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {loginStatus && (
            <div className="text-red-600 mb-4">{loginStatus}</div>
          )}

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
