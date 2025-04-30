import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout'; // Correct path to BackgroundLayout

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    newPassword: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setMessage('');
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex((u) => u.email === formData.email);

    if (userIndex === -1) {
      setError('No account found with that email.');
      return;
    }

    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Update password
    users[userIndex].password = formData.newPassword;
    localStorage.setItem('users', JSON.stringify(users));

    setMessage('Password updated! Redirecting to login...');
    setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <BackgroundLayout>
      {/* Background Overlay with Blur */}
      <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/your-homepage-image.jpg')` }}>
        

        {/* Form Container (Login Box) */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="p-8 max-w-md w-full bg-white bg-opacity-80 backdrop-blur-md rounded-2xl shadow-xl">
            <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">Reset Password</h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Registered Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
              >
                Reset Password
              </button>

              {message && <p className="text-green-600 text-sm mt-4 text-center">{message}</p>}
              {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
            </form>
            <p className="text-center mt-4 text-sm text-gray-600">
              Remembered your password?{' '}
              <span
                onClick={() => navigate('/login')}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </div>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default ResetPassword;
