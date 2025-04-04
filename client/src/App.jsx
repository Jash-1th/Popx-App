import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Welcome from './components/pages/Welcome'
import Signup from './components/pages/Signup'
import Login from './components/pages/Login'
import AccountSettings from './components/pages/AccountSettings'

const theme = createTheme()

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App