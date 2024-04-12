import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'tailwindcss/tailwind.css';

const SignUpPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [signupStatus, setSignupStatus] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();

    // Perform validation
    if (!username || !email || !password || !confirmPassword || !phoneNumber || !address) {
      setSignupStatus('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setSignupStatus('Passwords do not match');
      return;
    }

    // Your sign-up logic goes here...
    // For demonstration purposes, let's assume the sign-up is successful
    setSignupStatus('Sign-up successful. Please login.');
    // Clear form fields
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhoneNumber('');
    setAddress('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="mb-4">
            <TextField
              fullWidth
              type="password"
              label="Confirm Password"
              variant="outlined"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Phone Number"
              variant="outlined"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          {signupStatus && (
            <div className="text-red-600 mb-4">{signupStatus}</div>
          )}

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <a href="/login" className="text-blue-500">Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
