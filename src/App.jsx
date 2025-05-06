import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import About from './pages/About';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Feedback from './pages/Feedback';
import ResetPassword from './components/ResetPassword';
import Teammember from './pages/Teammember'; // Import the Teammember component
import ProtectedRoute from './routes/ProtectedRoute';
const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedInUser');
    if (!isLoggedIn && window.location.pathname !== '/signup' && window.location.pathname !== '/login') {
      navigate('/signup'); // Correcting navigation path
    }
  }, [navigate]);

  return null;
};

function App() {
  return (
    <Router basename="/personality-application"> {/* Use basename if app is served from a subdirectory */}
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <AuthRedirect />
        
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          
          <Route path="/results" element={<Results />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/teammember" element={<Teammember />} />
          <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz/>
            </ProtectedRoute>
          }
        /> {/* Add the Teammember route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
