import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout'; // Sahi path!

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const validate = () => {
    const newErrors = {};
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid email';
    } else if (storedUsers.find((user) => user.email === formData.email)) {
      newErrors.email = 'This email is already registered';
    }

    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters';

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    console.log('User registered:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', password: '' });

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  

  return (
    <BackgroundLayout>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-md w-full border">
          <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">Create an Account</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : ''}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : ''}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 border rounded ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              Sign Up
            </button>

            {submitted && (
              <p className="text-green-600 text-sm text-center mt-4">
                Signup successful! Redirecting to login...
              </p>
            )}
          </form>

          <p className="text-center mt-4 text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </BackgroundLayout>
  );
};

export default Signup;