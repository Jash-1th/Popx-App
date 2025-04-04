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
        const response = await axios.get('/api/user/me', {
          withCredentials: true 
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response?.status === 401) {
          navigate('/login');
        } else {
          setError('Failed to load account data. Please try again later.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh' 
      }}>
        <CircularProgress size={60} />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ pt: 4 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
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
    
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ 
          fontWeight: 'bold',
          color: 'text.primary'
        }}>
          Account Settings
        </Typography>
       
      </Box>

    
      <Paper elevation={3} sx={{
        p: 4,
        borderRadius: 2,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: 4
      }}>
        
        <Box sx={{
          width: 150,
          height: 150,
          borderRadius: '50%',
          overflow: 'hidden',
          boxShadow: 3,
          flexShrink: 0
        }}>
          <Avatar
            src={userData?.profileImage || 'https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.jpg?s=612x612&w=0&k=20&c=tfBv6taG9nTidFwENcrvEEvRHABN5gDAmg-K1G1Etnc='}
            alt="User Profile"
            sx={{
              width: '100%',
              height: '100%',
              fontSize: '3rem',
              bgcolor: 'primary.main'
            }}
          />
        </Box>

        
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" sx={{ 
            fontWeight: 'bold',
            mb: 2,
            color: 'text.primary'
          }}>
            {userData?.fullName || 'No Name Provided'}
          </Typography>
          
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 2
          }}>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <strong>Email:</strong> {userData?.email || 'N/A'}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <strong>Phone:</strong> {userData?.phone || 'N/A'}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <strong>Company:</strong> {userData?.companyName || 'N/A'}
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary' }}>
              <strong>Account Type:</strong> {userData?.isAgency ? 'Agency' : 'Individual'}
            </Typography>
          </Box>
        </Box>
      </Paper>
      <Typography variant="body1" sx={{ 
          whiteSpace: 'pre-line',
          color: 'text.secondary',
          lineHeight: 1.6,
          fontSize: '1.1rem',
          mt: 2
        }}>
          {`Lorem ipsum color sit amet. Consectetur sedipiscing\n\nElit. Sed diam nonum; etrone tempor invidunt ut\n\nLatore el dolore nagna alleyrem ent. Sed dam`}
        </Typography>
    </Container>
  );
};

export default AccountSettings;