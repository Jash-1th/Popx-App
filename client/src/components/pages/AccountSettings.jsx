import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Avatar, Paper, CircularProgress, Alert } from '@mui/material';
import axios from 'axios';

const AccountSettings = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/me`,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error('Account settings error:', error);
        if (error.response?.status === 401) {
          navigate('/login');
        } else {
          setError(error.response?.data.message || 'Failed to load account data. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  // Loading state
  if (loading) {
    return (
      <Container  sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
       
        minHeight: '100vh' 
      }}>
        <CircularProgress size={60} />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Loading account details...
        </Typography>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container maxWidth="md" sx={{ 
        display: 'flex',
        flexDirection: 'column',
       
        minHeight: '100vh',
        pt: 4 
      }}>
        <Alert severity="error" sx={{ mb: 2, width: '100%' }}>
          {error}
        </Alert>
        <Button 
          variant="contained" 
          onClick={() => window.location.reload()}
        >
          Try Again
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ 
      py: 4,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
    }}>
      {/* Header Section */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ 
          fontWeight: 'bold',
          color: 'text.primary',
          mb: 2
        }}>
          Account Settings
        </Typography>
        
        <Typography variant="body1" sx={{ 
          
          color: 'text.secondary',
          
          fontSize: '1.1rem'
        }}>
          {`Lorem ipsum color sit amet. Consectetur sedipiscing\n\nElit. Sed diam nonum; etrone tempor invidunt utLatore el dolore nagna alleyrem ent. Sed dam`}
        </Typography>
      </Box>

      {/* Profile Section */}
      <Paper elevation={3} sx={{
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4,
        mb: 4
      }}>
        {/* Profile Image */}
        <Box sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: 3,
          flexShrink: 0
        }}>
          <Avatar
            src={userData.profileImage || 'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc='}
            alt="User Profile"
            sx={{
              width: '100%',
              height: '100%',
              fontSize: '3rem',
              bgcolor: 'primary.main'
            }}
          />
        </Box>

        {/* User Details */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" sx={{ 
            fontWeight: 'bold',
            mb: 2,
            color: 'text.primary'
          }}>
            {userData.fullName || 'No Name Provided'}
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2
          }}>
            <DetailItem label="Email" value={userData.email} />
            <DetailItem label="Phone" value={userData.phone} />
            <DetailItem label="Company" value={userData.companyName} />
            <DetailItem 
              label="Account Type" 
              value={userData.isAgency ? 'Agency' : 'Individual'}
            />
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

// Reusable Detail Component
const DetailItem = ({ label, value }) => (
  <Typography variant="body1" sx={{ color: 'text.secondary' }}>
    <strong>{label}:</strong> {value || 'N/A'}
  </Typography>
);

export default AccountSettings;