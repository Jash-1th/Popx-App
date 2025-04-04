import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  TextField,
  Button,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Paper,
  Box
} from '@mui/material';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/signup', formData);
      navigate('/login');
      alert('Registration successful! Please login.');
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#f5f6fa',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          borderRadius: 2,
          border: '1px solid #e0e0e0'
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Create your<br />PopX account
        </Typography>

        <form onSubmit={handleSubmit}>
         
          <TextField
            fullWidth
            required
            id="fullName"
            label="Full Name"
            variant="outlined"
            margin="normal"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f5f6fa',
                borderRadius: '8px'
              }
            }}
          />

         
          <TextField
            fullWidth
            required
            id="phone"
            label="Phone number"
            variant="outlined"
            margin="normal"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f5f6fa',
                borderRadius: '8px'
              }
            }}
          />

          
          <TextField
            fullWidth
            required
            id="email"
            label="Email address"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f5f6fa',
                borderRadius: '8px'
              }
            }}
          />

      
          <TextField
            fullWidth
            required
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f5f6fa',
                borderRadius: '8px'
              }
            }}
          />

         
          <TextField
            fullWidth
            id="companyName"
            label="Company name"
            variant="outlined"
            margin="normal"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#f5f6fa',
                borderRadius: '8px'
              }
            }}
          />

        
          <FormControl component="fieldset" margin="normal" fullWidth>
            <FormLabel component="legend" sx={{ mb: 1, color: 'text.secondary', fontSize: '0.875rem' }}>
              Are you an Agency?
            </FormLabel>
            <RadioGroup
              row
              value={formData.isAgency}
              onChange={(e) => setFormData({ ...formData, isAgency: e.target.value === 'true' })}
            >
              <FormControlLabel
                value={true}
                control={<Radio sx={{ color: '#6c25ff', '&.Mui-checked': { color: '#6c25ff' } }} />}
                label="Yes"
              />
              <FormControlLabel
                value={false}
                control={<Radio sx={{ color: '#6c25ff', '&.Mui-checked': { color: '#6c25ff' } }} />}
                label="No"
              />
            </RadioGroup>
          </FormControl>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              py: 1.5,
              backgroundColor: '#6c25ff',
              '&:hover': { backgroundColor: '#581cdc' }
            }}
          >
            Create Account
          </Button>

          
        </form>
      </Paper>
    </Box>
  );
};

export default Signup;