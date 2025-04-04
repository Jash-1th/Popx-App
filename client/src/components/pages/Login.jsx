import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', credentials);
      navigate('/account');
      alert('Login successful!');
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div 
      className="container-fluid min-vh-100 d-flex flex-column justify-content-start"
      style={{ 
        backgroundColor: '#f5f6fa',
        padding: '0 1.5rem'
      }}
    >
      <div className="mx-auto bg-white p-4 rounded-3 shadow-sm" 
           style={{ 
             maxWidth: '400px', 
             width: '100%',
             border: '1px solid #e0e0e0'
           }}>
        <h2 className="fw-bold mb-3 text-center" 
            style={{ 
              color: '#1e1e1e', 
              fontSize: '1.75rem',
              lineHeight: '1.4'
            }}>
          Sign in to your<br />PopX account
        </h2>
        
        <p className="text-muted text-center mb-4" 
           style={{ 
             lineHeight: '1.5',
             fontSize: '0.9rem'
           }}>
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit.
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label text-muted small">Email Address</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter email address"
              required
              style={{
                backgroundColor: '#f5f6fa',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-muted small">Password</label>
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Enter password"
              required
              style={{
                backgroundColor: '#f5f6fa',
                border: '1px solid #e0e0e0',
                borderRadius: '8px'
              }}
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            className="btn w-100 py-2 mb-3 text-white"
            style={{
              backgroundColor: '#6c25ff',
              borderColor: '#6c25ff',
              fontSize: '1rem',
              borderRadius: '8px'
            }}
          >
            Login
          </button>

          <p className="text-center mb-0">
            <span className="text-muted">Don't have an account? </span>
            <Link 
              to="/signup" 
              className="text-decoration-none fw-medium"
              style={{ color: '#6c25ff' }}
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;