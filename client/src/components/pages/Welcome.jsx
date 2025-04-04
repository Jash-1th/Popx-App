import { Link } from 'react-router-dom';
import "./Welcome.css";
const Welcome = () => {
  return (
    <>
    <body>
    <div 
      className="container-fluid min-vh-100 d-flex flex-column justify-content-end"
      style={{ backgroundColor: '#f5f6fa'}}
    >
      <div className="w-100 text-center pb-5">
        <div className="mb-5">
          <h2 className="fw-bold mb-3" style={{ color: '#1e1e1e', fontSize: '1.75rem' }}>
            Welcome to PopX
          </h2>
          <p className="text-muted" style={{ maxWidth: '320px', margin: '0 auto', lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: '400px', padding: '0 1.5rem' }}>
          <Link
            to="/signup"
            className="btn btn-primary w-100 py-2 mb-3 text-white d-block"
            style={{
              backgroundColor: '#6c25ff',
              borderColor: '#6c25ff',
              fontSize: '1rem',
              textTransform: 'none'
            }}
          >
            Create Account
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-primary w-100 py-2 mb-3 d-block"
            style={{
              color: '#6c25ff',
              borderColor: '#6c25ff',
              fontSize: '1rem',
              textTransform: 'none'
            }}
          >
            Login
          </Link>

          <p className="text-muted mt-3">
            Already Registered?{' '}
            <Link 
              to="/login" 
              className="text-decoration-none"
              style={{ color: '#6c25ff', fontWeight: '500' }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
    </body>
    </>
  );
};

export default Welcome;